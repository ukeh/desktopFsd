var express = require('express');
var loginRouter=express.Router();


function route(nav){


    loginRouter.route("/")
    .get((req,res)=>{
        res.render('login.ejs',{nav,title:'LogIn'});
    });


    loginRouter.route('/save')
    .post((req,res)=>{

        console.log(req.body); 
    }
    )

    return loginRouter;
}

module.exports=route;
