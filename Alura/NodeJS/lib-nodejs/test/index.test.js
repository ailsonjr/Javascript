const pegaArquivo = require('../index');
const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
];

const caminho = '/home/ailson/diversos/Programação/Javascript/Alura/NodeJS/lib-nodejs/test/arquivos/'

describe('pegaArquivo', () => {
  it('deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function')
  });

  it('deve retornar array com resultados', async () => {
    const resultado = await pegaArquivo(`${caminho}texto1.md`);
    expect(resultado).toEqual(arrayResult);
  });

  it('deve retornar mensagem "não há links"', async () => {
    const resultado = await pegaArquivo(`${caminho}texto_semLinks.md`);
    expect(resultado).toBe('não há links');
  });

  it('deve lançar um erro na falta de arquivo', async () => {
    await expect(pegaArquivo(caminho)).rejects.toThrow(/não há arquivo no caminho/)
  });

  it('deve resolver a função com sucesso', async () => {
    await expect(pegaArquivo(`${caminho}texto1.md`)).resolves.toEqual(arrayResult)
  })
});
