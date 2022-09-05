const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] })
  }
  return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

// async function pegaArquivo(path) {
//   const encoding = 'utf-8';
//   try {
//     const texto = await fs.promises.readFile(path, encoding);
//     return extraiLinks(texto);
//     // console.log(extraiLinks(texto));
//   } catch (erro) {
//     trataErro(erro);
//   } finally {
//     console.log(chalk.yellow('operação concluída'));
//   }
// }

module.exports = pegaArquivo;

// pegarArquivo('./');

// function pegaArquivo(path) {
//   const encoding = 'utf-8';
//   fs.promises.readFile(path, encoding)
//     .then(texto => console.log(texto))
//     .catch(erro => trataErro(erro));
// }

// function pegaArquivo(path) {
//   const encoding = 'utf-8';
//   fs.readFile(path, encoding, (erro, data) => {
//     if (erro) trataErro(erro);
//     console.log(chalk.green(data));
//   });
// }

/* Exemplos de Regex
/\[\[\w\s]*\]/
    \[\] => abre e fecha colchetes
    [\w]* => [] grupo | \w palavra | \s espaço | * 1 ou mais vezes
/\[\[^\]]*\]/
    ^\] => não é colchete que fecha
\([^\)]*\) => seleciona tudo entre parentêses
\(https?:\/\/[^$#\s].[^\s]*\) => pega links dentro de parenteses
*/
