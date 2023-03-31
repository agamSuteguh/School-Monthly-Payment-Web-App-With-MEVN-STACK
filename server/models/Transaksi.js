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

    // properti baru untuk bulan
    admin: {    
      type: String,
  
  },
 
},
  
  
  { timestamps: true }
);

// menambahkan transform function pada schema
transaksiSchema.set('toObject', { getters: true });
transaksiSchema.set('toJSON', { getters: true });

// menambahkan getter function untuk tanggal
transaksiSchema.path('createdAt').get(function(date) {
  return `${date.toLocaleString('default', { month: 'long' })}`;
});

// menambahkan pre-save hook untuk mengisi nilai bulan dan tahun


module.exports = model("Transaksi", transaksiSchema);
