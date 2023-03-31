const { model, Schema } = require("mongoose");


const sppSchema = new Schema(
  {
    nominal: {    
        type: Number,
      required: true,
    },

   
    tahun: {
      type: Number,
      required: true,
    },

  },
  
  { timestamps: true }
);

module.exports = model("Spp", sppSchema)