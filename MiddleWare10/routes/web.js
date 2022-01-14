import express from "express"
let router=express.Router();
import {homeController} from "../Controller/homeController.js"
import {aboutController} from "../Controller/aboutController.js"
router.get('/',homeController);
router.get('/about',aboutController);
export default router;