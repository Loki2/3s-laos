const mongoose = require('mongoose');


const serviceSchema = new mongoose.Schema(
  {
    name_lao:{
      type: String,
      required: true
    },
    name_eng:{
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true,
      maxlength: 100
    },
    image:{
      type: String,
      required: true
    },
    icon:{
      type: String,
      required: true
    },
    status:{
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
)

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;