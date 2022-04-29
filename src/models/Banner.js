const mongoose = require('mongoose');


const bannerSchema = new mongoose.Schema(
  {
    code:{
        type: String,
        required: true
    },
    title:{
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
    slug:{
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

const Banner = mongoose.model("Banner", bannerSchema);

module.exports = Banner;