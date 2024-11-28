const express = require('express');
const ConnectDatabase = require('./src/DB/database');
require('dotenv').config();

ConnectDatabase();

const cityRouter = require('./src/routes/City.Router.js')
const AdventureRouter = require('./src/routes/Adventure.Router.js')
// const { CreateNewCityInDBService } = require('./src/service/City.Service');
const PORT = process.env.PORT;
const app = express();

app.use(express.json()); // Add this line to handle JSON requests



// CreateNewCityInDBService("Raipur", "https://wallup.net/wp-content/uploads/2017/11/17/233110-New_York_City-USA-city-cityscape-reflection-skyscraper-skyline.jpg", "100+place for touring", ["Dabeli"]);


app.use('/cities', cityRouter)

app.use('/adventures', AdventureRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
