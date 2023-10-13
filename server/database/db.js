require("dotenv").config();
const mongoose  = require("mongoose");
const URI = process.env.MONGODB_URL;


module.exports=()=>{
    const connectionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        family:4
    }
    try{
        mongoose.connect(URI,connectionParams);
        console.log('Db connected')

    }catch(err){
        console.log(err,"error");
    }
}