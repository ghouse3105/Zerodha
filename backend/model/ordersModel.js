const { model } = require("mongoose");

const { ordersSchema } = require("../schemas/ordersSchema");

const ordersModel = model("Order", ordersSchema);

module.exports = { ordersModel };