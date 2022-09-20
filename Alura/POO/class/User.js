// classe com método não estático
class User {
  #nome // usado o # fora do constructor para indicar que é um atributo privado
  #email
  #nascimento
  #role
  #ativo

  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || 'estudante';
    this.#ativo = ativo;
  }

  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  set nome(novoNome) {
    if (novoNome === '') {
      throw new Error('Formato não válido');
    }
    this.#nome = novoNome;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
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

// atributos privados usando por conveção o _ e get e set para ler e editar o arquivo
class User4 {
  _role = '';
  set role(tipoRole) {
    if (tipoRole !== 'admin') {
      tipoRole = 'estudante'
    }
    this._role = tipoRole
  }

  get role() {
    return this._role
  }

  constructor(nome) {
    this._nome = nome;
  }
}

class User5 {
  #nome
  #sobrenome
  #email
  #nascimento
  #role
  #ativo

  constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#sobrenome = sobrenome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || 'estudante';
    this.#ativo = ativo;
  }

  get nome() {
    return `${this.#nome} ${this.#sobrenome}`;
  }

  get sobrenome() {
    return this.#sobrenome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  set nome(novoNome) {
    if (novoNome === '') {
      throw new Error('formato não válido')
    }
    let [nome, ...sobrenome] = novoNome.split(" ")
    sobrenome = sobrenome.join(' ')
    this.#nome = nome
    this.#sobrenome = sobrenome
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
  }
}

module.exports = {
  User,
  User2,
  User3,
  User4,
  User5,
};


// const novoUser = new User('Ailson', 'ailson@gmail.com', '2000-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(novoUser));
