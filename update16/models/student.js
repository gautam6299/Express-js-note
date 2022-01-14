import mongoose from "mongoose"

const studentSchema=new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true, min:18, max:50},
    // fees:{type:mongoose.Decimal128m, required:true, validate:v=> v>=5500.50},
    hobbies:{type:Array},
    isactive:{type:Boolean},
    Comments:[{value:{type:String},publish:{type:Date, default:Date.now}}],
    join:{type:Date, default:Date.now}
})

//compiling schema
const studentModel=mongoose.model('student',studentSchema);

//1. update functon
const updateDocById= async (id)=>{
   try {
    //    let result=await studentModel.findByIdAndUpdate(id,{
    //        name:'Gaut'
    //    })

    let result=await studentModel.findByIdAndUpdate(id,{
        name:'Gautam'
    }, {returnDocument:'after'})
       console.log(result)
   } catch (error) {
       console.log(error)
   }
}

//2. updateOne= update only document
const updateOneDoc= async (id)=>{
    try {
     let result=await studentModel.updateOne({_id:id},{ name:'Gautam'}, {upsert:true}); // update only one document
        console.log(result)
    } catch (error) {
        console.log(error);
    }
}

// 3. Update many
const updateOneDoc= async (age)=>{
    try {
     let result=await studentModel.updateMany({age:age},{ name:'Gautam'}, {upsert:true}); // update All match with age
        console.log(result)
    } catch (error) {
        console.log(error);
    }
}

// export {updateDocById}
export {updateOneDoc}