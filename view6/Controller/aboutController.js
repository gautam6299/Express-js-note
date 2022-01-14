import {join} from "path";
let aboutController=(req,res)=>{
    // res.send("<h1>About page<h1>");
    res.sendFile(join(process.cwd(),'views','about.html'))
}
export {aboutController};