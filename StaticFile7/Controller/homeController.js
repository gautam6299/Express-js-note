import {join} from "path"
let homeController=(req,res)=>{
    res.sendFile(join(process.cwd(),'views','home.html'));
}
export {homeController};