const { model, Schema } = require("mongoose");





const transaksiSchema = new Schema(
  {
    siswa: {    
        type: String,
      required: true,
    },

   
    jumlahPembayaran: {
      type: Number,
      required: true,
    },

  },
  
  { timestamps: true }
);

module.exports = model("Transaksi", transaksiSchema)