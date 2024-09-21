const express = require("express");
const router = express.Router();
const usersService = require('./usersService');
const adminAuth = require("../../middlewares/adminAuth");

router.get('/admin/users/listing', adminAuth, (req,res)=>{

    usersService.getUsers((err,resp)=>{
        if(err){

        }

        res.render('admin/users/listing', resp);
    })
    
})

router.get('/admin/users/create', adminAuth, (req,res)=>{
    res.render('admin/users/create');
})

router.post("/admin/created", adminAuth, (req,res)=>{
    login = req.body.email;
    password = req.body.password;

    usersService.existuser(login, (err,resposta)=>{
        if(err){
            res.redirect('/admin/users/create');
        }

        if(resposta == undefined){
            usersService.saveUser(login, password, (err, resp)=>{
                if(err){
                    res.redirect("/");
                }
        
                res.redirect('/admin/users/listing');
            })
        }else {
            res.redirect('/users/admin/users/create');
        }
    })

})

router.get("/login",(req, res)=>{
    res.render("admin/users/login");
})

router.post("/authenticate", (req, res) => {
    const login = req.body.email;
    const password = req.body.password;

    usersService.authenticateUser(login, password, (err, user) => {
        if (err) {
            res.redirect("/login");
        }

        if (user) {
            // Configurar a sessão do usuário
            req.session.user = {
                id: user.id,
                email: user.email
            };
            
            // Redirecionar ou responder com os dados da sessão
            res.redirect("/articles/admin/articles");
        } else {
            // Caso a senha esteja incorreta ou o usuário não seja encontrado
           res.redirect("/login");
        }
    });
});

router.get("/logout", (req,res)=>{
    req.session.user = undefined;
    res.redirect("/");
})

module.exports = router;