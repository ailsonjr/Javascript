const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

function extraiLinks(arrLinks) {
  return arrLinks.map(objLink => Object.values(objLink).join());
}

export default async function listaValidada(listaDeLinks) {
  const links = extraiLinks(listaDeLinks);
  const status = await checaStatus(links);

  return listaValidada.map((obj, i) => ({
    ...obj,
    status: status[i]
  }));
}

function manejaErros(erro) {
  if (erro.cause.code == 'ENOTFOUND') {
    return 'link não encontrado';
  } else {
    return 'ocorreu algum erro';
  }
}

async function checaStatus(arrayURLs) {
  const arrStatus = await Promise
    .all(
      arrayURLs.map(async url => {
        try {
          const response = await fetch(url);
          return response.status;
        } catch (erro) {
          manejaErros(erro);
        }
      })
    );

  return arrStatus;

  // .all(arrayURLs
  //   .map(async url => {
  //     const res = await fetch(url);
  //     return `${res.status} - ${res.statusText}`;
  //   }));
}

function geraArrayDeURLs(arraylinks) {
  return arraylinks
    .map(objLink => Object
      .values(objLink).join());
}

async function validaURLs(arrayLinks) {
  const links = geraArrayDeURLs(arrayLinks);
  const statusLinks = await checaStatus(links);

  const resultados = arrayLinks
    .map((obj, i) => ({
      ...obj,
      status: statusLinks[i]
    }));
  return resultados;
}
