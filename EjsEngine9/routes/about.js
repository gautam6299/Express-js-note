import { aboutController } from "../Controller/aboutController.js";
import express from "express";
let router= express.Router();

router.get("/",aboutController);

export default router;