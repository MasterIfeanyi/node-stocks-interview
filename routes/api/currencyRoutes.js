const express = require("express");
const router = express.Router();

const { getLive, getExchange, saveLive } = require("../../controllers/currencyController");

router.post("/getLive", getLive);

router.post("/getExchange", getExchange);

router.post("/saveLive", saveLive)

module.exports = router;