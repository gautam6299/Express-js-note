let logger=(req,res,next)=>{
    console.log("logined");
    next();
}
export default logger;