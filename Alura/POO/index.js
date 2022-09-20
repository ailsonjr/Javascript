const { User, User5 } = require('./class/User');
const Docente = require('./class/Docente');
const Admin = require('./class/Admin');

const novoUser = new User('Kelly', 'kelly@email.com', '2000-01-01');
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Ailson', 'ailson@email.com', '1995-01-01');
console.log(novoAdmin.nome);
novoAdmin.nome = 'Beatriz';
console.log(novoAdmin.nome);

const novoUser2 = new User5('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser2.nome) //'Juliana'
novoUser2.nome = 'Juliana Silva Souza'
console.log(novoUser2.nome) //'Juliana'
console.log(novoUser2.sobrenome) //'Silva Souza'

