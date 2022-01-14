import mongoose from "mongoose";

let connectdb= async (dataBaseurl)=>{
  const DB_OPTION={
      user:'Binod',
      pass:'12345',
     dbName:'schooldb',
     authSource:'schooldb'
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