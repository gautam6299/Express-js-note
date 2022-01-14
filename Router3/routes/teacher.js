import express from "express"
let router=express.Router();

router.get("/All",(req,res)=>{
    res.send("All Teacher from Aadim college");
})
router.post("/create",(req,res)=>{
    res.send("Create Teacher");
})
router.put("/update",(req,res)=>{
    res.send("update Teacher" );
})
router.delete("/delete",(req,res)=>{
    res.send("Delete Teacher");
})
export default router;