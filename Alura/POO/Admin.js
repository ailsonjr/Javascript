import User from './User.js';

class Admin extends User {
  constructor(nome, email, nascimento, role = 'admin', ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nomeCurso, vagas) {
    return `Curso de ${nomeCurso} criado com ${vagas} vagas`;
  }
}

const newAdmin = new Admin('Ailson', 'ailson@mail.com', '2000-01-01');
console.log(newAdmin);
console.log(newAdmin.exibirInfos());
console.log(newAdmin.criarCurso('JS', 20));
