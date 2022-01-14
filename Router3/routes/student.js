import express from "express";
let router=express.Router();

router.get("/All",(req,res)=>{
    res.send("All student from Aadim college");
})
router.post("/create",(req,res)=>{
    res.send("Create student");
})
router.put("/update",(req,res)=>{
    res.send("update student" );
})
router.delete("/delete",(req,res)=>{
    res.send("Delete Student");
})
export default router;