const express = require("express");
const router = express.Router();

const { getLive, getExchange, saveLive, getCurrencyExchange } = require("../../controllers/currencyController");

router.post("/getLive", getLive);

router.post("/getExchange", getExchange);

router.post("/saveLive", saveLive)

router.post("/getCurrencyExchange", getCurrencyExchange)

module.exports = router;