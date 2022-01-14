import express from "express"
import studentController from "../controller/studentController.js"
let router=express.Router()

router.get('/setCookie',studentController.set_cookie);
router.get('/getCookie',studentController.get_cookie);
router.get('/deleteCookie',studentController.delete_cookie);

export default router;