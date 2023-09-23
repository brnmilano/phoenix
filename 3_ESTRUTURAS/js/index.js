// 1 - Variáveis
let nome = "Gabriel";

console.log(nome);

nome = "Gabriel Santos";

console.log(nome);

const idade = 21;

console.log(idade);

//idade = 22;

console.log(typeof nome);
console.log(typeof idade);

// 2 - Funções do JS: Prompt
//const getPrompt = prompt("Digite sua idade:")

//console.log(`Você tem ${getPrompt} anos.`);

// 3 - Funções do JS: Math.x
console.log(Math.max(5, 2, 3, 10));

console.log(Math.floor(5.15));

console.log(Math.ceil(5.15));

// 4 - Funções do JS: Console.x
console.log("teste");
console.error("erro")
console.warn("aviso");

// 7 - IF
let número = 10

if (número > 5) {
  console.log("Número é maior que 5");
}

const user = "Bruno";

if (user === "Bruno") {
  console.log("Olá Bruno");
}

// 8 - Else

const loggedIn = false;

if (loggedIn) {
  console.log("Está autenticado");
} else {
  console.log("Não está autenticado");
}

const z = 10;
const x = 15;

if (z > 5 && z > 20) {
  console.log("Números mais altos");
} else {
  console.log("Os números não são mais altos");
}

// 9 - Else If
if (0 > 2) {
  console.log("Agora não");
} else if (1 > 2) {
  console.log("Agora não");
} else if (2 > 3) {
  console.log("Agora não");
} else if (3 > 2) {
  console.log("Agora sim");
}

// 10 - While

let p = 0;

while (p < 5) {
  console.log(`Repetindo ${p}`);
  p = p + 1;
  //p++;
};

// 11 - Do While
let o = 10;

do {
  console.log(`Valor de o: ${o}`);
  o--;
} while (o > 1);

console.log("-");

// 12 - For

for (let i = 0; i < 10; i++) {
  console.log(`Repetindo algo`);
}

let r = 10;

for (r; r > 10; r = r - 1) {
  console.log(`O r está diminuindo`);
}

// 13 - Break

for (let u = 20; u > 10; u--) {
  console.log(`O valor de ${u}`);

  if (u === 12) {
    console.log(`o g é 12`);
    break;
  }
}

// 14 - Switch

const job = "Advogado"

switch (job) {
  case "Programador":
    console.log("Você é um Programador");
    break;

  case "Advogado":
    console.log("Você é um Advogado");
    break;

  case "Engenheiro":
    console.log("Você é um Engenheiro");
    break;

  default:
    console.log("Profissão não encontrada");
    break;
}