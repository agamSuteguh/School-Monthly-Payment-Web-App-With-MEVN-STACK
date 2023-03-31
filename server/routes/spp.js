const { Router } = require("express");
const router = Router();
const Spp = require("../models/Spp");
const Siswa = require("../models/Siswa");

router.post("/addspp", async (req, res) => {
  try {
    const { nominal, tahun } = req.body;
    if (!nominal || !tahun) {
      return res.json({
        status: "bad",
        msg: "Isi semua baris",
      });
    }

    const siswaTerdaftar = await Siswa.find();

    const spp = new Spp({
      nominal,
      tahun,
    });

    const sppTersimpan = await spp.save();
    
    const updateSiswa = await Siswa.updateMany({}, { $inc: { tagihanSpp: +nominal } });

    res.json({
      status: "ok",
      msg: "Berhasil menambah Spp!",
      spp: sppTersimpan,
      account: updateSiswa,
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
