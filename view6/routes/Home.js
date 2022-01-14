import express from 'express'
let router=express.Router();
import {homeController} from "../Controller/homeController.js";
router.get("/",homeController);

export default router;