# Getting started

This is the backend REST API for the web app I built [stocks](https://ifeanyi-stocks.netlify.app)

To run the app use `npm start`

To install all the dependencies `npm install`

## env variables

There are end points that require an api key to gain access, to gain your own api key, go to the following websites 

**Stocks**

The API service below provides real-time stocks data

[iexcloud](https://iexcloud.io/cloud-login#/register)

the env key is `IEXCLOUD_API_KEY`

**Exchange rate**

This API service was used to convert from one currency to another

[alphaVantage](https://www.alphavantage.co/support/#api-key)

the env key is `ALPHA_VANTAGE_API_KEY`


*ALPHA VANTAGE API endpoint became a premium endpoint, so I switched to `exchangeratesapi.io`*

[exchangeratesapi.io](https://exchangeratesapi.io/documentation/#convertcurrency)

the env key is `EXCHANGE_RATES_DATA_API`


**Market rate for currencies**

This API service provides live FX exchange rate for multiple currencies

[marketTrade](https://marketdata.tradermade.com/signup)

the env key is `LIVE_API_KEY`

## Node-fetch

You need to install a package called `node-fetch` to be able to make fetch requests in Node.js

You have to install version two (2) to be able to use `require`

```javascript
"node-fetch": "^2.6.7",
```

## mongo-db

You need to set up a mongoDB database to store information.

# All rights reserved

**DO NOT COPY FOR AN ASSIGNMENT** - Avoid plagiarism and adhere to the spirit of this [Academic Honesty Policy](https://www.freecodecamp.org/news/academic-honesty-policy/)

Please do not steal my work, this took hard work and six days. 