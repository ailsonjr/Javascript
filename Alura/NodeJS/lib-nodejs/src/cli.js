#!/usr/bin/env node
import { yellow, black } from 'chalk';
import listaValidada from './http-validacao';
import { lstatSync, promises } from 'fs';
import pegaArquivo from './index';

const caminho = process.argv;

async function imprimeLista(valida, resultado, identificador = '') {

  if (valida) {
    console.log(
      yellow('lista validada'),
      black.bgGreen(identificador),
      await listaValidada(resultado),
    );
  } else {
    console.log(
      yellow('lista de links'),
      black.bgGreen(identificador),
      resultado,
    );
  }

}

async function processaTexto(argumentos) {
  const caminho = argumentos[2];
  const valida = argumentos[3] == '--valida';

  try {
    lstatSync(caminho);
  } catch (erro) {
    if (erro.code === 'ENOENT') {
      console.log('arquivo ou diretório não existe');
      return
    }
  }

  if (lstatSync(caminho).isFile()) {
    const resultado = await pegaArquivo(caminho);

    if (argumentos[3] === 'validar') {
      console.log(yellow('Links validados'), await validaURLs(resultado));
    } else {
      imprimeLista(valida, resultado);
    }
  } else if (lstatSync(caminho).isDirectory()) {
    const arquivos = await promises.readdir(caminho);
    arquivos.forEach(async nomeDeArquivo => {
      const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
      imprimeLista(valida, lista, nomeDeArquivo);
    });
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