const fetch = require("node-fetch");
require("dotenv").config();
const timePeriod = require("../timePeriod");
const stockModel = require("../model/Stocks");


const getStock = async (req, res) => {
    const { ticker, type } = JSON.parse(JSON.stringify(req.body))

    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=${timePeriod(type)}&symbol=${ticker}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`)

        const data = await response.json();

        return res.status(200).json({ "data": Object.values(data) });
    } catch (error) {
        return res.json({ error });
    }
}


const getUnlimitedStocks = async (req, res) => {
    const { tickerArray, type } = JSON.parse(JSON.stringify(req.body));


    if (tickerArray) {
        console.log("request recieved")
    }

    let stocksArray = [];
    
    try {
        const result = await tickerArray.forEach((ticker, index) => {
        
            setTimeout(async () => {
                const response = await fetch(`https://www.alphavantage.co/query?function=${timePeriod(type)}&symbol=${ticker}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);

                // const name = response.data["Meta Data"]["2. Symbol"];

                // const value = response.data[`${timePeriod(type)}`][`${date.split("T")[0]}`]["4. close"]

                const data = await response.json();     
                
                stocksArray.push(Object.values(data));
                  
                if (stocksArray.length === tickerArray.length) {
                    console.log("done")
                    return res.status(200).json({ "data": stocksArray})
                }
            }, index * 12000)
        })
    } catch (error) {
        return res.json({ error });
    }
}


const saveStocks = async (req, res) => {
    const { tickerArray } = req.body;

    const newStockArray = new stockModel({tickerArray});

    try {
        const response = await newStockArray.save();
        if (!response) return res.status(400).json({ "msg": "could not save" });
        return res.status(201).json("Array saved")
    } catch (error) {
        return res.status(400).json({"msg": error.message})
    }
}


const getBatchStocks = async (req, res) => {
    const { tickerArray } = req.body
    
    try {
        const response = await fetch(`https://cloud.iexapis.com/v1/stock/market/batch?symbols=${tickerArray.toString().toLowerCase()}&types=quote&token=${process.env.IEXCLOUD_API_KEY}`)
        // const response = await fetch(`https://cloud.iexapis.com/stable/stock/aapl/quote?token=${process.env.STOCKS_API_KEY}`)
        const data = await response.json();
        console.log(data)
        const array = Object.values(data).map(item => ({name: item.quote.symbol, price: item.quote.latestPrice}))
        return res.status(200).json({ "data": array })
    } catch (error) {
        return res.status(400).json({"msg": error.message})
    }
}


module.exports = {
    getStock,
    getUnlimitedStocks,
    saveStocks,
    getBatchStocks
}