import express from "express"
let router=express.Router();
import {aboutController} from "../Controller/aboutController.js";
router.get('/',aboutController);

export default router;