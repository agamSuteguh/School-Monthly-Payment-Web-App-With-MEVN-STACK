const { Router } = require("express")
const router = Router()
const Siswa = require("../models/Siswa")

//Tambah Siswa
router.post("/addSiswa", async (req,res) => {
    try {
        const { username, nis, gender } = req.body;
        if (!username || !nis || !gender) {
           res.json({
            status: "bad",
            msg: "Isi semua baris",
          });
        }

      const newSiswa = await new Siswa({
        username,
        nis,
        gender,})

        const savedSiswa = await newSiswa.save();

     
        res.json( {
            status: "ok",
            msg: "Siswa Berhasil Ditambahkan!",
            Siswa: savedSiswa,
         
          });
 }  catch (error) {
    console.log(error.message);
  }
})

module.exports = router;