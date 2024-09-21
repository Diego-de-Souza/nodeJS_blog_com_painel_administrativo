const express = require("express");
const router = express.Router();
const categoriesService = require('./categoriesService');
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/categories/new", adminAuth, (req,res)=>{
    res.render("admin/categories/new");
})

router.post("/save", adminAuth , (req,res)=>{
    var title = req.body.title;
    if(title != undefined){
        categoriesService.createTitleCategory(title, (err, resp)=>{
            if(err){
                return res.redirect("admin/categories/new");
            }

            res.redirect('/categories');
        })
    }else{
        res.redirect("admin/categories/new");
    }
})

router.get("/", adminAuth, (req, res)=>{

    categoriesService.getCategories((err, resp)=>{
        if(err){
            return res.redirect(200, "admin/categories/new");
        }

        res.render("admin/categories/index", {categorias: resp});
    })
    
})

router.post("/delete", adminAuth, (req, res) => {
    var id = req.body.id;
    if (id != undefined && !isNaN(id)) { // verifica se o id é um número e não é nulo
        categoriesService.deleteCategory(id, (err, resp) => {
            if (err) {
                return res.redirect('/admin/categories/new'); // Atualizado para nova sintaxe
            }
            
            res.redirect('/categories');
        });
    } else {
        res.redirect('/admin/categories/new'); // Atualizado para nova sintaxe
    }
});

router.get("/admin/categories/update/:id", adminAuth, (req,res)=>{
    var id = req.params.id;
    if(isNaN(id)){
        res.redirect('/categories');
    }
    categoriesService.updateCategoryById(id, (err,resp)=>{
        if(err){
            return res.redirect('/admin/categories/new');
        }
        if(resp.status == 404){
            res.redirect('/categories');
        }else{
            res.render('admin/categories/edit', resp);
        }
        
    })
})

router.post("/update/title/:id", adminAuth, (req,res)=>{
    var id = req.params.id;
    var title = req.body.title;
    if(title != undefined){
        categoriesService.updateTitleCategory(title, id, (err, resp)=>{
            if(err){
                return res.redirect("admin/categories/new");
            }

            res.redirect('/categories');
        })
    }else{
        res.redirect("admin/categories/new");
    }
})

module.exports = router;