import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map(captura => ({ [captura[1]]: captura[2] }));

  return resultados.length === 0 ? 'não há links' : resultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

export default async function pegaArquivo(caminhoDoArquivo) {
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

// module.exports = pegaArquivo;

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
