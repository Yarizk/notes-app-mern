const express = require("express");
const mongoose = require('mongoose');
const cors =  require("cors");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 8080; 

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/noteRoutes"))

app.listen(PORT, console.log(`Server is starting at ${PORT}`));