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

// 11 - Override

class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const bruno = new Humano("Bruno", 28);

console.log(bruno);

Humano.prototype.idade = "Não defindo";

console.log(bruno.idade);
console.log(Humano.prototype.idade);

// 12 - Symbols

class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);
console.log(boeing[asas]);
console.log(boeing[pilotos]);

// 13 - Getters e Setters 

class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  };

  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}`
  };

  set adicionarTags(tags) {
    const tagsArray = tags.split(", ");
    this.tags = tagsArray;
  };
};

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programação, JS";

console.log(myPost);

// 14 - Herança

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  };
};

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, nome);

    this.nome = nome;
  }
}

const shark = new Lobo(4, "Shark")

console.log(shark);
console.log(shark.patas);

// 15 - Operador Instanceof

console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);