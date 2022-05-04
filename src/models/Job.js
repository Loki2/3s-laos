const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema(
  {
    position:{
      type: String,
      required: true
    },
    desc:{
      type: String,
      required: true
    },
    image:{
      type: String,
      required: true
    },
    type: {
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

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;