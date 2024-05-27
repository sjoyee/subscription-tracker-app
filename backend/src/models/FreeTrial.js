const mongoose = require("mongoose");

const freeTrialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now(),
  },
  endDate: {
    type: Date,
    required: true,
  },
});

module.exports = FreeTrial = mongoose.model("FreeTrial", freeTrialSchema);
