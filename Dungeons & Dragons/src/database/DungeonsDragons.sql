CREATE DATABASE IF NOT EXISTS DungeonsDragons;
drop database DungeonsDragons;
USE DungeonsDragons;

CREATE TABLE resultado (
  idResultado INT PRIMARY KEY AUTO_INCREMENT,
  resultado VARCHAR(45)
);

CREATE TABLE quiz (
  idQuiz INT PRIMARY KEY AUTO_INCREMENT,
  pergunta1 VARCHAR(45),
  pergunta2 VARCHAR(45),
  pergunta3 VARCHAR(45),
  pergunta4 VARCHAR(45),
  fkResultado INT,
  FOREIGN KEY (fkResultado) REFERENCES resultado (idResultado)
);

CREATE TABLE usuario (
  idUsuario INT auto_increment,
  nome VARCHAR(45),
  sobrenome VARCHAR(45),
  email VARCHAR (30),
  senha VARCHAR (45),
  fkQuiz INT,
  fkResultado INT,
  PRIMARY KEY (idUsuario),
  CONSTRAINT fkQuiz FOREIGN KEY (fkQuiz) REFERENCES quiz (idQuiz),
  CONSTRAINT fkResultado FOREIGN KEY (fkResultado) REFERENCES resultado (idResultado)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
    CONSTRAINT fk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario (idUsuario)
);

SHOW TABLES;

desc resultado;
select * from resultado;

SELECT * FROM usuario;

-- select para mostrar o resultado do usuario

-- select card1 (a maioria dos usuarios) 
SELECT resultado, COUNT(*) AS count
FROM resultado
GROUP BY resultado
ORDER BY count DESC
LIMIT 1;

select * from usuario;

-- select pizza (distribuição dos resultados)
SELECT resultado, COUNT(*) AS count_pergunta
FROM (
  SELECT resultado AS resultado1 FROM resultado WHERE resultado1 = 'Guerreiro'
  UNION ALL
SELECT resultado AS resultado2 FROM resultado WHERE resultado2 = 'Barbaro'
  UNION ALL
SELECT resultado AS resultado3 FROM resultado WHERE resultado3 = 'Ladino'
  UNION ALL
SELECT resultado AS resultado4 FROM resultado WHERE resultado4 = 'Bardo'
  UNION ALL
SELECT resultado AS resultado5 FROM resultado WHERE resultado5 = 'Mago'
) AS subquery
GROUP BY quiz;

-- select das colunas, respostas

SELECT resultado.resultado FROM usuario AS usu
INNER JOIN quiz ON usu.fkQuiz = quiz.idQuiz
INNER JOIN resultado ON resultado.idResultado = quiz.fkResultado
WHERE usu.idUsuario = 10;

SELECT resultado, COUNT(*) AS quantidade_resultados
FROM resultado
GROUP BY resultado;

insert into resultado values 
	(null, 'mago');