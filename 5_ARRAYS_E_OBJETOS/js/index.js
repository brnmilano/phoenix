// 1 - Array
const array = [1, 2, 3, 4, 5];

console.log({ array });
console.log(typeof array);

const names = ["João", "Maria", "Pedro"];

console.log(names[2]);

// 2 - Propriedades

const arrayNumbers = [1, 2, 3];

console.log(arrayNumbers.length);

const myName = "Bruno";

console.log(myName.length);

// 3 - Métodos

const otherNumbers = [1, 2, 3];

const allNumbers = otherNumbers.concat(otherNumbers);

console.log(allNumbers);

const text = "Olá, mundo!";

console.log(text);

console.log(text.toUpperCase());

console.log(text.indexOf("á"));

// 4 - Objetos (Object Literals)

const person = {
  name: "Bruno",
  age: 28,
  weight: 80,
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.weight);

// 5 - Criando e Deletando Propriedades

const car = {
  engine: 1.6,
  wheels: 4,
  brand: "Fiat",
  model: "Uno",
};

console.log(car);

car.km = 20000;

console.log(car);

delete car.km;

console.log(car);

// 6 - Mais sobre Objetos

const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: []
};

Object.assign(obj2, obj);

console.log(obj2);

// 7 - Conhecendo melhor os Objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2));

// 8 - Mutação

const a = {
  name: "Bruno"
};

const b = a;

console.log(a);
console.log(b);
console.log(a === b);

a.age = 31;

console.log(a);
console.log(b);
console.log(a === b);

delete b.age;

console.log(a);
console.log(b);
console.log(a === b);

// 9 - Loops em Arrays

const users = ["Bruno", "Maria", "Pedro"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando usuários: ${users[i]}`);
}

// 10 - Métodos de Arrays: push e pop

const cars = ["Fiat", "Ford", "Ferrari"];

console.log(cars);

cars.push("BMW");

console.log(cars);

const removedItem = cars.pop();

console.log(cars);

console.log(removedItem);

cars.push("BMW", "VW", "GM");

console.log(cars);

// 11 - Métodos de Arrays: shift e unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letters);

console.log(letter);

letters.unshift("d", "e");

console.log(letters);

// 12 - indexOf e lastIndexOf

const myElemets = ["maça", "abacate", "banana", "abacate"];

console.log(myElemets.indexOf("abacate"));
console.log(myElemets.indexOf("banana"));

console.log(myElemets[2]);
console.log(myElemets[myElemets.indexOf("banana")]);

console.log(myElemets.lastIndexOf("abacate"));

// 14 - Slice

const testSlice = ["a", "b", "c", "d", "e"];

const subArray = testSlice.slice(0, 3);

console.log(testSlice);
console.log(subArray);

// 15 - ForEach

const nums = [1, 2, 3, 4, 5];

nums.forEach((num) => {
  console.log(`o número é ${num}`);
})

const posts = [
  {
    title: "Post 1",
    category: "PHP"
  },
  {
    title: "Post 2",
    category: "JS"
  },
  {
    title: "Post 3",
    category: "JAVA"
  },
]

posts.forEach((post) => {
  console.log(`Exibindo posts ${post.title}, da categoria ${post.category}`);
})

// 16 - Includes

const brands = ["Fiat", "Ford", "Ferrari"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("Kia"));

if (brands.includes("Fiat")) {
  console.log("Temos a marca fiat");
}

// 17 - Reverse 

const reverseTeste = [1, 2, 3, 4, 5];

reverseTeste.reverse();

console.log(reverseTeste);

// 18 - Métodos de String: Trim

const trimTest = "            teste \n"

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

// 19 - Métodos de String: padStart e padEnd

const padStartTest = "1";

console.log(padStartTest);

const newNumber = padStartTest.padStart(5, "0");

console.log(newNumber);

const testPadEnd = newNumber.padEnd(10, "0");

console.log(testPadEnd);

// 20 - Métodos de String: Split

const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ")

console.log(arrayDaFrase);

// 21 - Métodos de String: Join

const frase2 = arrayDaFrase.join(" ");

console.log(frase2);

const fraseDeCompra = ["Mouse", "Teclado", "Headset"];

console.log(`Precisamos comprar: ${fraseDeCompra.join(", ")}`);

// 22 - Métodos de String: Repeat

const palavra = "testando, ";

console.log(palavra.repeat(5));

// 23 - Rest Operator

const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total
}

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(20, 34, 45, 1, 200));

// 24 - For Of

const somaInfinita2 = (...args) => {
  let total = 0;

  for (let num of args) {
    total += num;
  }

  return total
}

console.log(somaInfinita2(1, 2, 3));

// 25 - Destructuting em Objetos

const userDetails = {
  firstName: "Bruno",
  lastName: "Milano",
  job: "Programador",
}

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

//renomeando variaveis

const { firstName: primeiroNome } = userDetails;

console.log(primeiroNome);

// 26 - Destructuring em Arrays

const myList = ["Avião", "Carro", "Moto", "Tratos"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON

const myJson = '{"name": "Bruno", "age": 27, "skills": ["JS", "PHP", "Python"]}';

// 28 - JSON para Objeto e Objeto para Json

const myObject = JSON.parse(myJson);

console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);

// json invalido

const badJson = '{"name": Bruno, "age": 27}';

// const myBadJson = JSON.parse(badJson);

// console.log(myBadJson);

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);
console.log(typeof myNewJson);