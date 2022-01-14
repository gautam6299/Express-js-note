class studentController{

    static set_cookie= (req,res)=>{
        //set cookie
        res.cookie("userName", "Binod");
        res.cookie("cart",5);
        //persistent Cookies
        res.cookie("password","12345", {maxAge:20000});
        res.send("set cookie")

    }
    static get_cookie= (req,res)=>{
        res.send("get cookie")

        // get cookies
        console.log(req.cookies)
        console.log(req.cookies.userName)
    }
    static delete_cookie= (req,res)=>{
    // clear cookie
       res.clearCookie("userName");

        res.send("delete cookie")
    }
}
export default studentController;