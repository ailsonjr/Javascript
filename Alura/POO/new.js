// função construtora
function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`;
  }
}

const novoUser = new User('Kelly', 'kelly@email.com');
console.log(novoUser.exibirInfos());

// function Admin(role) {
//   User.call(this, 'Ailson', 'ailson@email.com');
//   this.role = role || 'estudante';
// }

// Admin.prototype = Object.create(User.prototype);
// const outroUser = new Admin('admin');
// console.log(outroUser.role);

const user = {
  init: function (nome, email) {
    this.nome = nome;
    this.email = email;
  },

  exibirInfos: function () {
    return this.nome;
  }
}

const outroUser = Object.create(user);
outroUser.init('Beatriz', 'beatriz@email.com')

// console.log(outroUser.exibirInfos('Beatriz'));
console.log(outroUser.exibirInfos());
console.log(user.isPrototypeOf(outroUser));

// factory functions
function criaUser(nome, email) {
  return {
    nome,
    email,
    exibeInfos() {
      return `${nome}, ${email}`
    }
  }
}

const newUser = criaUser('Rodrigo', 'r@r.com');
console.log(newUser);
console.log(newUser.exibeInfos());
