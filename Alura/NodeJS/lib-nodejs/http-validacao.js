const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

function manejaErros(erro) {
  throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise
      .all(arrayURLs
        .map(async url => {
          const res = await fetch(url);
          return `${res.status} - ${res.statusText}`;
        }));
    return arrayStatus;
  } catch (erro) {
    manejaErros(erro);
  }
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

module.exports = validaURLs;
