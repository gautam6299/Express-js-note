import { homeController } from "../Controller/homeController.js";
import express from "express";
let router= express.Router();

router.get("/",homeController);

export default router;