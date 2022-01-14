import {join} from "path";
let homeController=(req,res)=>{
    // res.send("Home page");
    res.sendFile(join(process.cwd(), "views", "home.html"));
    // res.sendFile("F:\\Class\\Mern\\geekyshow\\note\\Express js\\view6\\views\\home.html")
}
export {homeController};