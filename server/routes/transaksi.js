const { Router } = require("express")
const router = Router()
const Transaksi = require("../models/Transaksi")
const Siswa = require("../models/Siswa")

router.get('/laporan-total-pembayaran-perbulan', async (req, res) => {
  try {
    const laporan = await Transaksi.aggregate([
      {
        $group: {
          _id: { bulan: '$bulan', tahun: '$tahun' },
          totalPembayaran: { $sum: '$jumlahPembayaran' }
        }
      },
      {
        $project: {
          _id: 0,
          bulan: '$_id.bulan',
          tahun: '$_id.tahun',
          totalPembayaran: 1
        }
      }
    ]);
    res.json(laporan);
  } catch (err) {
    res.status(500).send(err);
  }
});


//ambil data transaksi tertentu
router.get("/kwitansi/:id", async (req, res) => {
  try {
    const result = await Transaksi.findOne({ _id: req.params.id })

    res.json(result);

    if (!transaksi) {
      return res.json({ status: "bad", msg: "transaksi tidak ditemukan!" });
    }

    res.json({
      status: "ok",
      msg: "transaksi Ditemukan",
      transaksi,
    });
  } catch (error) {
    console.log(error.message);
  }
});


//ambil data semua transaksi 
router.get("/getTransaksi", async (req, res) => {
  try {
    const transaksi = await Transaksi.find();

    if (!transaksi) {
      return res.json({ status: "bad", msg: "transaksi tidak ditemukan!" });
    }

    res.json({
      status: "ok",
      msg: "transaksi Ditemukan",
      transaksi,
    });
  } catch (error) {

  }
});

// ambil transaksi  by id
router.get("/:id", async (req, res) => {
  try {
    const result = await Transaksi.findById(id); (req.params.id);

    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/addTransaksi', async (req, res) => {
  try {
    // ambil data siswa dan jumlah pembayaran dari request body
    const { siswa, jumlahPembayaran, admin} = req.body;
    if (!siswa || !jumlahPembayaran || !admin) {
      return res.json({
        status: "bad",
        msg: "Isi semua baris",
      });
    }

    // cari siswa berdasarkan id
    const siswaTerdaftar = await Siswa.findOne({ nis: req.body.siswa });
 

    // buat transaksi baru
    const transaksi = new Transaksi({
      siswa: siswaTerdaftar.username,
      jumlahPembayaran: jumlahPembayaran,
      admin:admin
    });

    // simpan transaksi



    if ((siswaTerdaftar.tagihanSpp-jumlahPembayaran) < 0) {
      return res.json({ status: "bad", msg: "Jumlah Pembayaran Melebihi Tagihan Yang Harus Dibayar!" });
    } 
    const transaksiTersimpan = await transaksi.save();
    const updateSiswa = await Siswa.findByIdAndUpdate(siswaTerdaftar._id, {tagihanSpp:siswaTerdaftar.tagihanSpp-jumlahPembayaran});
    
  
    
    // kirim response
    res.json({
      status: "ok",
      msg: "Berhasil menambah transaksi!",
      transaksi: transaksiTersimpan,
      account : updateSiswa
    });
  } catch (error) {
    console.log(error.message);
  }
});

//hapus data transaksi

router.delete("/delete/:id", async (req, res) => {
  try {

    const result = await Transaksi.findOneAndDelete({ _id: req.params.id })

    res.json({
      status: "ok",
      msg: "Transaksi Berhasil Dihapus!",


    });
  } catch (error) {
    console.log(error.message);
  }
});

//update hapus data transaksi


router.put("/update/:id", async (req, res) => {
  try {
    const result = await Transaksi.findByIdAndUpdate( 
      req.params.id,
      req.body.account,
      { new: true }
    );

    res.json({
      status: "ok",
      msg: "Transaksi diperbarui!",
      account: result
    });
  } catch (error) {
    console.log(error.message);
  }
});


module.exports = router;