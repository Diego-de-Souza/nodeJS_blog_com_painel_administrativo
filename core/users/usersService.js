const { User } = require('../definition'); // Ajuste o caminho conforme necessário
const bcrypt = require('bcryptjs');
const session = require("express-session");

exports.getUsers = async function(callback){
    try{
        const users = await User.findAll();

        return callback(null,{users: users});
    }catch(err){
        return callback(err);
    }
};

exports.existuser = async function(login, callback){
    try{
        const isUser = await User.findOne({where:{email:login}})

        return callback(null, isUser);
    }catch(err){
        return callback(err);
    }
};

exports.saveUser = async function(login, password, callback){
    try{
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(password, salt);

        const cadastroUsuario = await User.create({
            email: login,
            password: hash
        })

        return callback(null, cadastroUsuario);
    }catch(err) {
        return callback(err);
    };
}

exports.authenticateUser = async function(login, password, callback) {
    try {
        const confirmUser = await User.findOne({ where: { email: login } });
        
        if (confirmUser != undefined) {
            // Comparar a senha inserida com a senha armazenada
            const correct = bcrypt.compareSync(password, confirmUser.password);
            
            if (correct) {
                // Retornar os dados do usuário caso a senha esteja correta
                return callback(null, confirmUser);
            } else {
                // Senha incorreta
                return callback({
                    error_code: 401,
                    message: "Senha incorreta!"
                });
            }
        } else {
            // Usuário não encontrado
            return callback({
                error_code: 404,
                message: "Usuário não encontrado!"
            });
        }
    } catch (err) {
        // Capturando o erro
        return callback(err);
    }
};
