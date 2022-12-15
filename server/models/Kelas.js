const { model, Schema } = require("mongoose");

const kelasSchema = new Schema(
  {
    kelas: {
      type: Number,
      required: true,
    },
    jurusan: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = model("Kelas", kelasSchema)