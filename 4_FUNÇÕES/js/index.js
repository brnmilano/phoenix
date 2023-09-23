// 1 - Criando uma Função

function MyFunction(a, b) {
  console.log(a + b);

  return a * b;
};

MyFunction(10, 20);

const MyFunctionInVariable = function () {
  console.log("Minha função em variável");
};

MyFunctionInVariable();

const FunctionWithParameter = function (txt) {
  console.log(`Imprimindo um ${txt}`);
}

FunctionWithParameter("texto");
FunctionWithParameter("outro texto");

// 2 - Retorno das Funções

const a = 10;
const b = 20;
const c = 30;
const d = 40;

const FunctionWithReturn = function (a, b) {
  return console.log(a + b);
}

function Sum(n1, n2) {
  return n1 + n2;
}

const result = Sum(a, b);

console.log(result);

console.log(Sum(c, d));

// 3 - Escopo da Função

let y = 10;

function TestingScope() {
  let y = 5;

  console.log(`Y dentro da função é ${y}`);
};

TestingScope()

console.log(`Y fora da função é ${y}`);

// 4 - Escopo Aninhado (Nested Scopes)
let m = 10;

function NestedScope() {
  let m = 20;

  console.log(m);

  if (true) {
    let m = 30;

    console.log(m);

    if (true) {
      let m = 40;

      console.log(m);
    }
  }
}

NestedScope();

console.log(m);

// 5 - Arrow Function 

const ArrowFunction = () => {
  console.log(`Está é uma arrow function`);
}

ArrowFunction();

const evenOrOdd = (n) => {
  if (n % 2 === 0) {
    console.log(`Par`);
    return;
  }

  console.log(`Impar`);
}

evenOrOdd(5)
evenOrOdd(10)

// 6 - Mais sobre Arrow Function

const raizQuadrada = (x) => {
  return x * x;
}

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));

// 7 - Argumentos Opcionais

const multiplication = function (m, n) {
  if (n === undefined) {
    return m * 2
  } else {
    return m * n;
  }
}

console.log(multiplication(5));
console.log(multiplication(2, 4));

const greeting = (name) => {
  if (!name) {
    console.log("Olá");
    return;
  }

  console.log(`Olá ${name}!`);
}

greeting();

greeting("Bruno");

// 8 - Argumentos com valor Default

const CustomGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}`
}

console.log(CustomGreeting("Bruno"));
console.log(CustomGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("Repetindo 2 vezes");

repeatText("Repetindo 5 vezes", 5)