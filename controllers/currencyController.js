const fetch = require("node-fetch");
const {Headers} = require("node-fetch");
require("dotenv").config();
const LiveModel = require("../model/Live");

var myHeaders = new Headers();
// myHeaders.append("apikey", "itdNJ7LZWN5SehmEGgMC5i9ZqFhYGRc7");
myHeaders.append("apikey", `${process.env.EXCHANGE_RATES_DATA_API}`);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


const getLive = async (req, res) => {

    const {currencyArray} = req.body

    const curArray = currencyArray.toString();

    try {
        const response = await fetch(`https://marketdata.tradermade.com/api/v1/live?currency=${curArray}&api_key=${process.env.LIVE_API_KEY}`)
        const data = await response.json();
        return res.status(200).json({ "data": data })
    } catch (error) {
        return res.json({ error })
    }
}



const saveLive = async (req, res) => {
    const { currencyArray } = req.body;
    
    const newLiveData = new LiveModel({ currencyArray });
    
    try { 
        const response = await newLiveData.save();
        if (!response) return res.status(400).json({ "msg": "could not save" });
        return res.status(201).json("Array saved");
    } catch (error) {
        return res.status(400).json({"msg": error.message})
    }
}


const getExchange = async (req, res) => {
    const { from, to } = req.body
    
    try { 
        const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`)
        const data = await response.json(); 
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(400).json({"msg": error.message})
    }
}

// https://data.fixer.io/api

const getCurrencyExchange = async (req, res) => { 
    const {from, to, amount} = req.body

    console.log({from, to})

    try{
        const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
        const data = await response.json(); 
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(400).json({"msg": error.message})
    }
}



module.exports = {
    getLive,
    saveLive,
    getExchange,
    getCurrencyExchange
}