var express = require('express');
var signupRouter=express.Router();
  
function route(nav){


    signupRouter.route("/")
    .get((req,res)=>{
        res.render("signup.ejs",{nav,title:"SignUp"});
    });

    signupRouter.route('/save')
    .post((req,res)=>{
        console.log(req.body);
    })
    return signupRouter;
}
module.exports=route;
