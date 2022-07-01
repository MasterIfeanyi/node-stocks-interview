const express = require("express");
const router = express.Router();
const { getStock, getUnlimitedStocks, saveStocks, getLive, getExchange, saveLive } = require("../../controllers/tickerController");

router.post("/getStock", getStock);

router.post("/getUnlimitedStocks", getUnlimitedStocks);

router.post("/saveStocks", saveStocks);

router.post("/getLive", getLive);

router.post("/getExchange", getExchange);

router.post("/saveLive", saveLive)

module.exports = router;