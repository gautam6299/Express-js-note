import express from "express";
let router=express.Router();
import stu from "../Controller/studentController";
router.get('/result/:id',stu);
export default router;