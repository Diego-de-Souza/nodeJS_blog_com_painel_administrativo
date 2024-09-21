const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const session = require("express-session");

// Carrega as definições e associações
require('./core/definition');

const categoriesController = require("./core/categories/categoriesController");
const articlesController = require("./core/articles/articlesController");
const homeController = require("./core/home/homeController");
const usersController = require("./core/users/usersController");

//session
app.use(session({
    secret: "testesegurancateste",
    cookie:{ maxAge:600000}
}))

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection.authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso");
    })
    .catch((erro) => {
        console.log(erro);
    });

app.use("/categories", categoriesController);
app.use("/articles", articlesController);
app.use("/home", homeController);
app.use("/users", usersController);

// Redireciona a raiz para /home
app.get('/', (req, res) => {
    res.redirect('/home');
});

app.listen(8080, () => {
    console.log("O servidor está rodando!");
});
