const { Router } = require("express")
const router = Router()
const bcrypt = require("bcrypt")
const Admin = require("../models/Admin")
const Siswa = require("../models/Siswa")
const jwt = require("jsonwebtoken")

//daftar

//login admin
router.post("/login",  async (req, res) => {
  try {
       const { username , password } = req.body;

       const existAdmin = await Admin.findOne({ username });


    if (!username || !password) {
      return res.json({
        status: "bad",
        msg: "Isi semua baris",
      });
    }



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
      Admin:existAdmin,
      password:hashedPass,
      token,

    });
  } catch (error) {
    console.log(error.message);
  }
});

//login siswa
router.post("/logins",  async (req, res) => {
  try {
       const { username , password } = req.body;

       const existSiswa = await Siswa.findOne({ username });


    if (!username || !password) {
      return res.json({
        status: "bad",
        msg: "Isi semua baris",
      });
    }



    if (!existSiswa) {
      return res.json({
        status: "bad",
        msg: "Tidak ada akun yang ditemukan untuk nama pengguna yang Anda masukkan!",
      });
    }

    const comparedPass = await bcrypt.compare(password, existSiswa.password);

    if (!comparedPass) {
      return res.json({
        status: "bad",
        msg: "Kata sandi yang dimasukkan salah!",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

   

    const token = await jwt.sign({ Siswa },   "tokenkey");

    res.json({
      status: "ok",
      msg: "Anda berhasil masuk!",
      Siswa:existSiswa,
      password:hashedPass,
      token,

    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;