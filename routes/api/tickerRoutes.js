const express = require("express");
const router = express.Router();
const { getStock, getUnlimitedStocks, saveStocks, getBatchStocks } = require("../../controllers/tickerController");


router.post("/getStock", getStock);

router.post("/getUnlimitedStocks", getUnlimitedStocks);

router.post("/saveStocks", saveStocks);

router.post("/getBatchStocks", getBatchStocks)


module.exports = router;