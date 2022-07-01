const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    tickerArray: [{}]
})

module.exports = mongoose.model("stocks", stockSchema)