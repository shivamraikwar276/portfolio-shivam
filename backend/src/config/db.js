
const mongoose = require("mongoose")


async function connectDB(){

   try{
     await mongoose.connect(process.env.MONGO_URI);
    
     console.log("Successfull connected to DB ");
     
   }
   catch(err){
    console.log("DB connection error ");
    
   }
    
}

module.exports = connectDB