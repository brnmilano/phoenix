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
