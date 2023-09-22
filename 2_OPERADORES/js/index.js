// 1 - Number
console.log(typeof (7));
console.log(typeof (50.5));
console.log(typeof (-123));

// 2 - Operações Aritméticas
console.log(2 + 5); // 7
console.log(5 + (2 * 6)); // 17
console.log(5 + (2 * 6) / 2); // 11

// 3 - Special Numbers

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(12 * "asd");

// 4 - Strings

console.log(typeof "Olá");
console.log(`String com crase`);
console.log('String com aspas simples');
console.log("String com aspas duplas");
console.log("123 -> Aqui é uma string");

// 5 - Símbolos especiais em Strings
console.log("Texto em \nduas linhas");

// 6 - Concatenação de Strings
console.log(`Meu` + ` nome` + ` é` + ` João`);

// 7 - Interpolação (Template Strings)
let nome = "Bruno";

console.log(`Meu nome é ${nome}`);

console.log(`A soma de 2 + 2 é ${2 + 2}`);

// 8 - Booleans
console.log(true);
console.log(false);

//9 - Comparação de valores
console.log(10 > 15);
console.log(10 < 15);
console.log(25 === 25);
console.log(30 === 25);
console.log(50 !== 50);
console.log(125 !== 100);

// 10 - Operadores Lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Bruno" === 1);
console.log(5 > 2 || "Bruno" === 1);

console.log(!true);

// 11 - Empty Values
console.log(typeof null);
console.log(typeof undefined);

console.log(null === undefined);

console.log(null === false);
console.log(undefined === false);

// 12 - Conversão de tipo automática
console.log(5 * null);
console.log("5" + 3);
console.log("teste" * "testado");