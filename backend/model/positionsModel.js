const mongoose = require("mongoose");
const { positionsSchema } = require("../schemas/positionsSchema");

const PositionsModel = mongoose.model("Position", positionsSchema);

module.exports = PositionsModel;