// classe com método não estático
class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || 'estudante';
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

// classe com método estático
class User2 {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || 'estudante';
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

// classe com metodo sem ser estatico e estatico
class User3 {
  constructor() {
    this.nome = 'Camila'
    this.email = 'c@c.com'
    this.cpf = '12312312312'
  }
  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.cpf}`
  }

  static exibeNome(nome) {
    return nome
  }
}

/*
const novoUser = new User3('Carol', 'c@c.com', '12312312312');
const nomeUser = novoUser.nome;
console.log(User3.exibeNome(nomeUser)); //Camila
*/

// métodos estaticos de classe, não precisam ser instanciados, eles pode ser chamados direto da classe

module.exports = {
  User,
  User2,
  User3,
};


// const novoUser = new User('Ailson', 'ailson@gmail.com', '2000-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(novoUser));
