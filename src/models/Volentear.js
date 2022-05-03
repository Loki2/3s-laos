const mongoose = require('mongoose');


const volentearSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: true
    },
    content:{
      type: String,
      required: true
    },
    image:{
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

const Volentear = mongoose.model("Volentear", volentearSchema);

module.exports = Volentear;