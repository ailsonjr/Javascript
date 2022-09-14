const user = {
  nome: 'Ailson',
  email: 'ailson@email.com',
  nascimento: '2021/01/01',
  role: 'admin',
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  }
}

// user.exibirInfos();
// const exibir = user.exibirInfos;
// exibir();

const exibir = function () {
  console.log(this.nome);
} // dessa maneira é igual a const exibir = user.exibirInfos e o com isso não está conectado a nada 

const exibirNome = exibir.bind(user); // o bind 'conecta' o this a variável user e com isso consegue imprimir o nome
exibirNome(); // Ailson
exibir(); // undefined


function exibeInfos() {
  console.log(this.nome, this.email)
}

/* O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this. Ou seja, é possível atribuir um this diferente do contexto atual ao executar a função.*/

exibeInfos.call(user)

function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibeInfos = function () {
    console.log(this.nome, this.email);
  }
}

const newUser = new User('mariana', 'm@m.com');

const outroUser = {
  nome: 'Rodrigo',
  email: 'r@r.com'
}

newUser.exibeInfos() //mariana m@m.com
newUser.exibeInfos.call(outroUser) //Rodrigo r@r.comCOPI

function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`)
}
const otherUser = {
  nome: 'Beatriz',
  email: 'b@b.com',
  executaFuncao: function (fn) {
    fn.call(otherUser, this.nome, this.email)
  }
}

otherUser.executaFuncao(exibeMensagem);


// O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array

function exibeMensagem2(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`)
}
const user2 = {
  nome: 'Kelly',
  email: 'k@k.com',
  executaFuncao: function (fn) {
    fn.apply(user2, [this.nome, this.email])
  }
}
user2.executaFuncao(exibeMensagem2);
