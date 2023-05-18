const { Router } = require("express")
const router = Router()
const Siswa = require("../models/Siswa")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


//ambil data semua siswa 
router.get("/getSiswa", async (req, res) => {
  try {
    const siswa = await Siswa.find();

    if (!siswa) {
      return res.json({ status: "bad", msg: "Siswa tidak ditemukan!" });
    }

    res.json({
      status: "ok",
      msg: "Siswa Ditemukan",
      siswa,
    });
  } catch (error) {
    console.log(error.message);
  }
});

//ambil data siswa tertentu


router.get("/nis/search/:id", async (req, res) => {
  try {
    
    const siswa = await Siswa.findOne({ nis: req.params.id })

    res.json(siswa);

    if (!siswa) {
      return res.json({ status: "bad", msg: "Siswa tidak ditemukan!" });
    }

    res.json({
      status: "ok",
      msg: "Siswa Ditemukan",
      siswa,
    });
  } catch (error) {
    console.log(error.message);
  }
});


//Tambah Siswa
router.post("/addSiswa", async (req, res) => {
  try {
    const { username, nis, gender, kelas, jurusan, alamat, nisn ,noTelp , password  } = req.body;
    const NisExist = await Siswa.findOne({ nis });
    if (NisExist) {
      res.json({
        status: "bad",
        msg: "Nis Sudah Dipakai",
      });
    }
    if (!username || !nis || !gender || !kelas|| !jurusan|| !alamat || !nisn || !noTelp || !password ) {
      res.json({
        status: "bad",
        msg: "Isi semua baris",
      });
    }
    const UsnExist = await Siswa.findOne({ username });
    if (UsnExist) {
      res.json({
        status: "bad",
        msg: "Nama Siswa Sudah Dipakai",
      });
    }
   
 
    const hashedPass = await bcrypt.hash(password, 10);

    const newSiswa = await new Siswa({
      username, nis, gender, kelas, jurusan, alamat, nisn ,noTelp , password: hashedPass, 
    })


    const savedSiswa = await newSiswa.save();

    const token = await jwt.sign(
      { Admin: savedSiswa },
      "tokenkey"
    );

    res.json({
      status: "ok",
      msg: "Siswa Berhasil Ditambahkan!",
      Siswa:  savedSiswa,
      token,

    });
  } catch (error) {
    console.log(error.message);
  }
})

//hapus data siswa

router.delete("/delete/:id", async (req, res) => {
  try {

    const result = await Siswa.findOneAndDelete({ _id: req.params.id })

    res.json({
      status: "ok",
      msg: "Siswa Berhasil Dihapus!",


    });
  } catch (error) {
    console.log(error.message);
  }
});

//update data siswa

router.put("/update/:id", async (req, res) => {
  try {
    const result = await Siswa.findOneAndUpdate(
      req.params.id,
      req.body.siswa,
      { new: true }
    );


    res.json({
      status: "ok",
      msg: "Akun diperbarui!",
      oldAccount: req.body.siswa,
      account: result,
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;