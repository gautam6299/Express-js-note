
let homeController=(req,res)=>{
    // const data={
    //     'name':'Binod'
    // }
    res.render('home.ejs',{'title':'home'});
    // res.render('home.ejs',data);
}
export {homeController};