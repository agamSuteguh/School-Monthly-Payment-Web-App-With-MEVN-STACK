const { model, Schema } = require("mongoose");
const Kelas = require('./Kelas')

const siswaSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    nis: {
      type: Number,
      required: true,
      unique:true

    },
    kelas:{
      type: String,
      required: true
  },
  jurusan:{
    type: String,
    required: true
},
    gender:{
        type: String,
        required: true
    },
    tagihanSpp:{
      type:Number,
      default:0,
    }
    
  },
  { timestamps: true }
);

module.exports = model("Siswa", siswaSchema)