const { model, Schema } = require("mongoose");
const Kelas = require("./Kelas");

const siswaSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
   
    },
    nis: {
      type: Number,
      required: true,
   
    },
    kelas: {
      type: String,
      required: true,
    },
    jurusan: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    tagihanSpp: {
      type: Number,
      default: 0,
    },
    alamat: {
      type: String,
      required: true,
    },
    nisn: {
      type: Number,
      required: true,
   
    },
    noTelp: {
      type: Number,
      required: true,
   
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Siswa", siswaSchema);
