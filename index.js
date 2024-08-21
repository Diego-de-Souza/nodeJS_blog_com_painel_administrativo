//importando a biblioteca do express
const express = require("express");
//instanciando um avariavel com o express
const app = express();
//importando a biblioteca body-parser
const bodyParser = require("body-parser");
//import a configuração de conexão
const connection = require("./database/database");

const categoriesController = require("./core/categories/categoriesController");
const articleController = require("./core/articles/articlesController");

//view engine, metodo que configura a engine de visualização com a chave "view engine" e o valor 'ejs'
app.set('view engine','ejs');

//static - configuração para aceitar meus arquivos estaticos como css
app.use(express.static('public'));

//body parse - usado para trabalhar com formulario
app.use(bodyParser.urlencoded({extended:false}));
// para aceitar alem dados do formulario aceitar dados do tipo json
app.use(bodyParser.json());

//conexão com o banco de dados
connection.authenticate()
    .then(()=>{
        console.log("Conexão feita com sucesso")
    })
    .catch((erro)=>{
        console.log(erro)
    });

app.use("/categories",categoriesController);
app.use('/article', articleController);
//criando a primeira rota de amostragem
app.get("/", (req, res)=>{
    res.render("index");
});
//metodo da biblioteca expressa que escuta a conexão em uma porta especifica e retorna uma frase no console
app.listen(8080, ()=>{
    console.log("O servidor está rodando!")
})