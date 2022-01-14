import mongoose from "mongoose";

let connectdb= async (dataBaseurl)=>{
  const DB_OPTION={
      dbName:'expressdb', // if not aviable then create automatically
  }
    try{
    await mongoose.connect(dataBaseurl,DB_OPTION);
    console.log("Connected");
    }
    catch(error){
        console.log(error)
    }
}

export default connectdb;