const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/dbConn")
const tickerRoutes = require("./routes/api/routes")

const app = express();

const PORT = 3500 || process.env.PORT

// Connect to MongoDb
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use(tickerRoutes)

app.listen(PORT, () => console.log(`server is running on ${PORT}`))