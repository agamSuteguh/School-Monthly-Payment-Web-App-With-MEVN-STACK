const { model, Schema } = require("mongoose");

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,

    },
    password: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true
    },
    kelas:{type:Array},
  
    noTelp: {
      type: Number,
      required:true
      
    },
 
  },
  { timestamps: true }
);

module.exports = model("Admin", adminSchema)