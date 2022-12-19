const { Router } = require("express")
const router = Router()
const Kelas = require("../models/Kelas");


//Get Kelas Data
router.get("/getKelas", async (req, res) => {
  try {
    const kelas = await Kelas.find();

    if (!kelas) {
      return res.json({ status: "bad", msg: "Kelas tidak ditemukan!" });
    }

    res.json({
      status: "ok",
      msg: "Kelas Ditemukan",
      kelas,
    });
  } catch (error) {
    console.log(error.message);
  }
});

//Tambah Kelas
router.post("/addKelas", async (req, res) => {
    try {
      const { kelas, jurusan } = req.body;
    
     
      const newKelas = await new Kelas({
        kelas,
        jurusan
        ,
      })
  
      const savedKelas = await newKelas.save();
  
  
      res.json({
        status: "ok",
        msg: "Kelas Berhasil Ditambahkan!",
        Kelas: savedKelas,
  
      });
    } catch (error) {
      console.log(error.message);
    }
  })
  
  //hapus kelas 
router.delete("/delete/:id", async (req, res) => {
  try {

    const result = await Kelas.findOneAndDelete({ _id: req.params.id })

    res.json({
      status: "ok",
      msg: "Kelas Berhasil Dihapus!",
      result


    });
  } catch (error) {
    console.log(error.message);
  }
});



module.exports = router;