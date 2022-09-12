#!/usr/bin/env node
const chalk = require('chalk');
const validaURLs = require('./http-validacao');
const pegaArquivo = require('./index');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  if (caminho[3] === 'validar') {
    console.log(chalk.yellow('Links validados'), await validaURLs(resultado));
  } else {
    console.log(chalk.yellow('lista de links'), resultado);
  }
}

processaTexto(caminho);

// console.log(pegaArquivo(caminho[2]));

// console.log(caminho);
/* saida do console
[
  '/home/ailson/.nvm/versions/node/v12.22.7/bin/node',
  '/home/ailson/diversos/Programação/Javascript/Alura/NodeJS/lib-nodejs/cli.js'
]
 */