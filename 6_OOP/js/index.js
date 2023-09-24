// 1 - Métodos

const animal = {
  name: "Bob",
  latir: function () {
    console.log("Au au");
  }
}

console.log(animal.name);

animal.latir();

// 2 - Aprofundando em Métodos

const pessoa = {
  nome: "Gabriel",

  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  }
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Bruno");
console.log(pessoa.getNome());

// 3 - Prototype

const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(Object.getPrototypeOf(arr));

// 4 - Mais sobre Prototype

const myObject = {
  a: "b",
};

console.log(myObject.a.to);

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - Classes básicas

const cachorro = {
  raca: null
}


console.log(cachorro.raca);

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - Funções como classe - Função Construtora

function criarCachorro(nome, raca) {
  const cachorro = Object.create({})

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCachorro("Bob", "Pastor Alemão");

console.log(bob);

const jack = criarCachorro("Jack", "Bulldog");

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7 -  Funções como classe

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 8 - Metodos na Função construtora

Cachorro.prototype.uivar = function () {
  console.log("auuuuuuuuuuuuu");
}

husky.uivar

console.log(Cachorro.prototype);

// 9 - Classes ES6

class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador")

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 - Mais sobre classes

class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(`Esse caminhão tem ${this.eixos} e é da cor ${this.cor}`);
  }
}

const scania = new Caminhao(6, "Vermelha");

console.log(scania);

scania.descreverCaminhao();

Caminhao.motor = 4;

const c2 = new Caminhao(4, "preto");

console.log(c2);
console.log(c2.motor);

Caminhao.prototype.motor = 4.0

const c3 = new Caminhao(6, "Rosa")

console.log(c3.motor);