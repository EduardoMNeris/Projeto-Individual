var resultadoModel = require("../models/resultadoModel");

function salvarResultado(req, res) {

  var perso = req.body.persoServer;

  if (perso == undefined){
    res.status(400).send("Seu Personagem está undefined!")
  }
  
  else {
     resultadoModel.salvarResultado(perso)
      .then(
        function (resultado){
          res.json(resultado);
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
              "\nHouve um erro ao realizar o cadastro! Erro: ",
              erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
  }
}

function obterResultadoPeloIdUsuario(req, res) {
  const idUsuario = req.params.id;
  resultadoModel
    .obterResultadoPeloId(idUsuario)
    .then((resposta) => {
      res.status(200).json(resposta);
    })
    .catch((err) => console.log(`Não foi possivel salvar o resultado: ${err}`));
}

function obterResultadoMaisComum(req, res) {
  resultadoModel
    .obterResultadoMaisComun()
    .then((resposta) => {
      res.status(200).json(resposta);
    })
    .catch((err) => console.log(`Não foi possivel salvar o resultado: ${err}`));
}

function obterResultadosPerguntas(req, res) {
  resultadoModel
    .obterResultadosPerguntas()
    .then((resposta) => {
      res.status(200).json(resposta);
    })
    .catch((err) => console.log(`Não foi possivel salvar o resultado: ${err}`));
}

function obterResultados(req, res) {
  resultadoModel
    .obterResultadosDistintos()
    .then((resposta) => {
      res.status(200).json(resposta);
    })
    .catch((err) => console.log(`Não foi possivel salvar o resultado: ${err}`));
}

module.exports = {
  salvarResultado,
  obterResultadoPeloIdUsuario,
  obterResultadoMaisComum,
  obterResultadosPerguntas,
  obterResultados,
};
