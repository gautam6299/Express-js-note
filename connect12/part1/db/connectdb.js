import mongoose from "mongoose";
// let connectdb=(dataBaseurl)=>{
//      return mongoose.connect(dataBaseurl)
//      .then(()=>{
//          console.log("connected");
//      })
//      .catch((error)=>{
//          console.log(error);
//      })
// }

let connectdb= async (dataBaseurl)=>{
    try{
    await mongoose.connect(dataBaseurl);
    console.log("Connected");
    }
    catch(error){
        console.log(error)
    }
}

export default connectdb;