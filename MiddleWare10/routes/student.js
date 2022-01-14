import express from "express"
let router= express.Router();
import logger from "../middleware/logger-moddleware.js"
import {studentController} from "../Controller/studentController.js"
// Router level middleware
router.use(logger);  // apply for all rotes unde this student.js
router.use('/student',logger);  // apply only for this /student
router.get('/',studentController);
router.get('/binod',(req,res)=>{
    res.send("I am Binod Gautam");
})
export default router;