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
      type: String,
      required: true,
    },
    kelas: [{ type: Schema.Types.ObjectId, ref: 'Kelas'}],
    gender:{
        type: String,
        required: true
    }
  },
  { timestamps: true }
);

module.exports = model("Siswa", siswaSchema)