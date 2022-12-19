const { Router } = require("express")
const router = Router()
const Admin = require("../models/Admin")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");



//ambil data semua admin 
router.get("/getAdmin", async (req, res) => {
  try {
    const admin = await Admin.find();

    if (!admin) {
      return res.json({ status: "bad", msg: "admin tidak ditemukan!" });
    }

    res.json({
      status: "ok",
      msg: "admin Ditemukan",
      admin,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// ambil admin by id
router.get("/:id", async (req, res) => {
  try {
    const result = await Admin.findById(id); (req.params.id);

    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
});


//Tambah Admin
router.post("/addAdmin", async (req, res) => {
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
      noTelp,
    })

    const savedAdmin = await newAdmin.save();

    const token = await jwt.sign(
      { Admin: savedAdmin },
      "tokenkey"
    );
    res.json({
      status: "ok",
      msg: "Anda telah berhasil menambah admin!",
      Admin: savedAdmin,
      token,
    });
  } catch (error) {
    console.log(error.message);
  }
})



//hapus data admin

router.delete("/delete/:id", async (req, res) => {
  try {

    const result = await Admin.findOneAndDelete({ _id: req.params.id })

    res.json({
      status: "ok",
      msg: "Admin Berhasil Dihapus!",


    });
  } catch (error) {
    console.log(error.message);
  }
});

//update admin

router.put("/update/:id", async (req, res) => {
  try {
    const result = await Admin.findByIdAndUpdate( 
      req.params.id,
      req.body.account,
      { new: true }
    );

    res.json({
      status: "ok",
      msg: "Akun diperbarui!",
      account: result
    });
  } catch (error) {
    console.log(error.message);
  }
});


module.exports = router;