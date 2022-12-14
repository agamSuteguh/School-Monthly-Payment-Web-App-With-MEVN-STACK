const User = require("../models/User");
const bcrypt = require('bcrypt');

class AuthMiddleware {
  async register(req, res, next) {
    try {
      const { username, password, fullname, gender } = req.body;
      if (!username || !password || !fullname || !gender) {
        return res.json({
          status: "bad",
          msg: "Isi semua baris",
        });
      }

      if (username.length < 4) {
        return res.json({
          status: "bad",
          msg: "Nama pengguna harus minimal 4 karakter!",
        });
      }

      if (username.length > 20) {
        return res.json({
          status: "bad",
          msg: "Nama pengguna tidak boleh lebih dari 20 karakter!",
        });
      }

      if (username === process.env.ADMIN_LOGIN) {
        return res.json({
          status: "bad",
          msg: "Nama pengguna ini tidak dapat digunakan!",
        });
      }

      if (password.length < 8) {
        return res.json({
          status: "bad",
          msg: "Kata sandi harus minimal 8 karakter!",
        });
      }

      const existUser = await User.findOne({ username });

      if (existUser) {
        return res.json({
          status: "bad",
          msg: "Nama pengguna ini sudah ada di sistem. Silakan pilih yang lain",
        });
      }

      next();
    } catch (error) {
      console.log(error.message);
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.json({
          status: "bad",
          msg: "Isi semua baris",
        });
      }

      const existUser = await User.findOne({ username });

      if (!existUser) {
        return res.json({
          status: "bad",
          msg: "Tidak ada akun yang ditemukan untuk nama pengguna yang Anda masukkan!",
        });
      }

      const comparedPass = await bcrypt.compare(password, existUser.password);

      if (!comparedPass) {
        return res.json({
          status: "bad",
          msg: "Kata sandi yang dimasukkan salah!",
        });
      }

      next();
    } catch (error) {
      console.log(error.message);
    }
  }

  async admin(req, res, next) {
    try {
      const { username, password } = req.body

      if (!username || !password) {
        return res.json({ status: "bad", msg: "Isi semua baris!" });
      }

      if (username !== process.env.ADMIN_LOGIN) {
        return res.json({ status: "bad", msg: "Nama pengguna salah !" });
      }

      if (password !== process.env.ADMIN_PASS) {
        return res.json({ status: "bad", msg: "Kata sandi salah " });
      }

      next()
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = AuthMiddleware;
