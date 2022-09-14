const admin = {
  nome: 'Ailson',
  email: 'ailson@email.com',
  nascimento: '2021/01/01',
  role: 'admin',
  ativo: true,
  criarCurso: function () {
    console.log('curso criado');
  }
}

const student = {
  nome: 'Kelly',
  email: 'kelly@email.com',
  nascimento: '2000/01/01',
  role: 'estudante',
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  }
}

// Fazer com q admin herde a função exibirInfos
Object.setPrototypeOf(admin, student);
admin.criarCurso();
admin.exibirInfos();

let user = {
  perfil: 'estudante'
};

let estudante = {
  nome: 'juliana'
};

Object.setPrototypeOf(estudante, user);

console.log('Nome estudante ', estudante.nome) // 'juliana'
console.log('Perfil estudante', estudante.perfil) //'estudante'
console.log('Estudante ativo: ', estudante.ativo);

user.ativo = true;

console.log('Estudante ativo: ', estudante.ativo);

function User() { };
User.prototype.perfil = 'estudante';
let estudante2 = new User();
console.log('Perfil estudante2: ', estudante2.perfil); //'estudante'
console.log('__proto__ estudante2: ', estudante2.__proto__);
console.log('prototype estudante2: ', estudante2.prototype);
console.log('prototype User: ', User.prototype);

/*
__proto__ é uma propriedade que todos os objetos têm e que aponta para o protótipo que foi definido para aquele objeto.
prototype é uma propriedade da função que é definida como protótipo quando usamos new para criar novos objetos.
*/