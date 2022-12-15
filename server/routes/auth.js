const { Router } = require("express")
const router = Router()
const bcrypt = require("bcrypt")
const Admin = require("../models/Admin")
const jwt = require("jsonwebtoken")

//daftar
router.post("/register", async (req,res) => {
    try {
        const { username, password, fullname, noTelp } = req.body;
        if (!username || !password || !fullname || !noTelp) {
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

        if (password.length < 8) {
            return res.json({
              status: "bad",
              msg: "Kata sandi harus minimal 8 karakter!",
            });
          }

          
      const existAdmin = await Admin.findOne({ username });

      if (existAdmin) {
        return res.json({
          status: "bad",
          msg: "Nama pengguna ini sudah ada di sistem. Silakan pilih yang lain",
        });
      }
      const hashedPass = await bcrypt.hash(password, 10);

      const newAdmin = await new Admin({
        username,
        password: hashedPass,
        fullname,
        noTelp,})

        const savedAdmin = await newAdmin.save();

        const token = await jwt.sign(
            { Admin: savedAdmin },
            "tokenkey"
          );
        res.json( {
            status: "ok",
            msg: "Anda telah berhasil mendaftar!",
            Admin: savedAdmin,
            token,
          });
 }  catch (error) {
    console.log(error.message);
  }
})

//login
router.post("/login",  async (req, res) => {
  try {
       const { username , password } = req.body;



    if (!username || !password) {
      return res.json({
        status: "bad",
        msg: "Isi semua baris",
      });
    }

    const existAdmin= await Admin.findOne({ username });

    if (!existAdmin) {
      return res.json({
        status: "bad",
        msg: "Tidak ada akun yang ditemukan untuk nama pengguna yang Anda masukkan!",
      });
    }

    const comparedPass = await bcrypt.compare(password, existAdmin.password);

    if (!comparedPass) {
      return res.json({
        status: "bad",
        msg: "Kata sandi yang dimasukkan salah!",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const token = await jwt.sign({ Admin },   "tokenkey");

    res.json({
      status: "ok",
      msg: "Anda berhasil masuk!",
      Admin,
      token,
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;