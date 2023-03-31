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
    level: {
      type: Number,
      default:0
    }
 
  },
  { timestamps: true }
);

module.exports = model("Admin", adminSchema)