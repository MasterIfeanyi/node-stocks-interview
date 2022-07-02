const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// custom files
const connectDB = require("./config/dbConn")
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");
const tickerRoutes = require("./routes/api/tickerRoutes");
const currencyRoutes = require("./routes/api/currencyRoutes");


//initialize express app
const app = express();

// port 
const PORT = process.env.PORT || 3500;

// Connect to MongoDb
connectDB();

// built-in middleware for json 
app.use(express.json());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// add Access-control-allow header
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

//middleware for cookies
app.use(cookieParser());

// app.use(cors());
// app.options('*', cors());

app.use("/stocks", tickerRoutes);

app.use("/currency", currencyRoutes);

app.listen(PORT, () => console.log(`server is running on ${PORT}`))