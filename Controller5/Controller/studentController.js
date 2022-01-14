let stu=(req,res)=>{
    // const{id}= req.parms;
    if(req.parms.id==5){
        res.send("I am Binod Gautam");
    }
    else{
        res.send("I am not Binod Gautam");
    }
}
export default stu;