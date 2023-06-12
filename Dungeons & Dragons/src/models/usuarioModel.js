var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    var instrucao = `
        SELECT 
            u.email,
            u.senha
                FROM usuario as u
                    WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(email, senha) {    
    var instrucao = `
        INSERT INTO usuario (email, senha) VALUES
            ('${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarFk(fkQuiz, fkResultado, id) {
    var instrucao = `
    UPDATE usuario SET fkQuiz = ${fkQuiz}, fkResultado = ${fkResultado} WHERE idUsuario = ${id};`;
    return database.executar(instrucao);
}

function atualizarUsuario(nome, sobrenome, fkCadastro) {
    var instrucao = `
        INSERT INTO usuario (nome, sobrenome, fkCadastro, idUsuario) values ('${nome}', '${sobrenome}', ${fkCadastro}, ${fkCadastro});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);   
}


module.exports = {
    entrar,
    cadastrar,
    listar,
    atualizarFk,
    atualizarUsuario
};