const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const liveSchema = new Schema({
    currencyArray: [{}]
})

module.exports = mongoose.model("live", liveSchema)