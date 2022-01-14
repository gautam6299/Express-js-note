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

//1. delete document by id
const deleteDonById= async (id)=>{
      try {
           const result= await studentModel.findByIdAndDelete(id);
            console.log(result);
      } catch (error) {
          console.log(error)
      }
}

//2. delete one=> also delte with passing age,name..etc
const deleteOne= async (id)=>{
          try {
               const result= await studentModel.deleteOne({_id:id}); // delete only one
                console.log(result);
          } catch (error) {
              console.log(error)
          }
    }

//3.  delete Many
const deleteMany= async (a)=>{
          try {
               const result= await studentModel.deleteMany({age:a}); // delete only one
                console.log(result);
          } catch (error) {
              console.log(error)
          }
    }


// export {deleteDonById}
// export {deleteOne};
export {deleteMany};

