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

//1. Retriving All document= it return an array of object
const getAllDoc=async ()=>{
    const result= await studentModel.find();
    console.log(result); // retrurn all document in the form of array object
    console.log(result[0].name); // return Binod Gautam

    // Retrive only value of all document except key
    result.forEach((items)=>{
        console.log(
        items.name,
        items.age,
        // items.fees.toString(),
        items.hobbies[0],
        items.hobbies[0],
        items.isactive,
        items.Comments[0].value,
        items.Comments[0].publish,
        items.join
        )
    })
}


//2. Retrive All document with specific name
const getAllDocumentSecificfield=async ()=>{
        const result= await studentModel.find().select('name age') // include
        const result= await studentModel.find().select(['name', 'age']) // include
        const result= await studentModel.find().select({name:1 ,age:1}) // include

           const result= await studentModel.find().select('-name -age') // exclude
        const result= await studentModel.find().select(['-name', '-age']) // exclude
        const result= await studentModel.find().select({name:0 ,age:0}) // exclude

        console.log(result)
    }

    //3. Retrive Single Document= it retrun object
const getSingleDocment=async ()=>{
        const result= await studentModel.findById("61cfbb3f1938c7f892bb34cb"); // retrive by id

        const result= await studentModel.findById("61cfbb3f1938c7f892bb34cb" ,'name age'); // return only name and  age 
        console.log(result)
        const result= await studentModel.find({name:'asbin'});

        const result= await studentModel.find().countDocuments(); // return numbers of documents
            console.log(result)

        console.log(result.name,result.age,result.hobbies[0],result.hobbies[1]);
    }

// export {getAllDoc}
// export {getAllDocumentSecificfield}
export {getSingleDocment}