const mongoose = require('mongoose');


const orgSchema = new mongoose.Schema(
  {
    code:{
      type: String,
      required: true
    },
    name_lao:{
        type: String,
        required: true
    },
    name_eng:{
      type: String,
      required: true
    },
    desc:{
      type: String,
      required: true
    },
    logo:{
      type: String,
      required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Organize = mongoose.model("Organize", orgSchema);

module.exports = Organize;