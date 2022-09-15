import User from './User.js';

class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} passou no curso ${curso}.`;
  }
}

const novoDocente = new Docente('Kelly', 'kelly@email.com', '2000-01-01');
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Beatriz', 'JS'));
