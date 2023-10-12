require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT||3456;



app.use(express.json());








app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})