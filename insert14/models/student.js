import mongoose from "mongoose"

//Defining schema
const studentSchema=new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true, min:18, max:50},
    address:{type:String, required:true}
    // // fees:{type:mongoose.Decimal128m, required:true, validate:v=> v>=5500.50},
    // hobbies:{type:Array},
    // isactive:{type:Boolean},
    // Comments:[{value:{type:String},publish:{type:Date, default:Date.now}}],
    // join:{type:Date, default:Date.now}
})

//compiling schema
const studentModel=mongoose.model('student',studentSchema);

//1. without parameter
const createDoc=async()=>{
    try{
        // creating document
        const studentDoc=new studentModel({
            name:'Milan',
            age:23,
            address:'Kathmandu'
        //    hobbies:['dancing','reading'],
        //    isactive:true,
        //    Comments:[{value:'this is good mongoose'}]
        })
        // saving document
        const result=await studentDoc.save();
         console.log(result);
    } catch(error){
        console.log(error);
    }
}



// 2. with parameter
// const createDoc=async(name,age,hobbies,isactive,comt)=>{
//     try{
//         // creating document
//         const studentDoc=new studentModel({
//             name:name,
//             age:age,
//            hobbies:hobbies,
//            isactive:isactive,
//            Comments:comt
//         })
//         // saving document
//         const result=await studentDoc.save();
//          console.log(result);
//     } catch(error){
//         console.log(error);
//     }
// }

//3. insert multiple document

const createMultiDoc=async()=>{
    try{
        // creating document
        const studentDoc=new studentModel({
            name:'Binod',
            age:30,
           hobbies:['dancing','reading'],
           isactive:true,
           Comments:[{value:'this is good mongoose'}]
        })
        const milanDoc=new studentModel({
            name:'Milan',
            age:30,
           hobbies:['dancing','reading'],
           isactive:true,
           Comments:[{value:'this is good mongoose'}]
        })
        const asbinDoc=new studentModel({
            name:'asbin',
            age:30,
           hobbies:['dancing','reading'],
           isactive:true,
           Comments:[{value:'this is good mongoose'}]
        })
        // saving document
        const result=await studentModel.insertMany([studentDoc,milanDoc,asbinDoc]);
         console.log(result);
    } catch(error){
        console.log(error);
    }
}

// export  {createDoc,createMultiDoc};
export {createDoc}