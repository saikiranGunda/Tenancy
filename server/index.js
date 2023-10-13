require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT||3456;
const db = require('./database/db');


//database connection 
db();



app.use(express.json());







//server configuration
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})