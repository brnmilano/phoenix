// 1 - setTimeout

console.log(`Ainda não executou`);

setTimeout(function () {
  console.log("Requisição assíncrona");
}, 2000)

console.log(`Ainda não executou 2`);

// 2 - Função setInterval

console.log("Ainda não começou");

// setInterval(function () {
//   console.log("Intervalo assíncrono");
// }, 3000)

console.log("Ainda não começou 2");

// 3 - Promises

const promessa = Promise.resolve(5 + 5);

console.log("Algum código");

promessa.then((value) => {
  console.log(`A soma é ${value}`);
  return value;
})
  .then((value) => value - 1)
  .then((value) => console.log(`Agora é ${value}`));

console.log("Outro código");

// 4 - Erros nas Promises

Promise.resolve(4 * "asd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("O valor não é um némero");
    }
  })
  .catch((error) => console.log(`Ocorreu um ${error}`));

// 5 - Rejeitando Promisses

function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O número é maior que 10`)
    } else {
      reject(`O némero é menor que 10`)
    }
  })
}

const a = checkNumber(20);

const b = checkNumber(10);

a.then((value) => console.log(`O resultado é ${value}`)).catch((error) => {
  console.log(`Ocorreu um ${error}`)
});

b.then((value) => console.log(`O resultado é ${value}`)).catch((error) => {
  console.log(`Ocorreu um ${error}`)
});

// 6 - Resolvendo várias Promises

const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10)
  }, 3000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30)
  } else {
    reject("Erro!")
  }
});

Promise.all([p1, p2, p3])
  .then((values) => console.log(`${values}`))
  .catch((error) => console.log(`Ocorreu um ${error}`));

// 7 - Async Functions

async function somarComDelay(a, b) {
  return a + b
}

somarComDelay(10, 20).then((value) => console.log(`O resultado é ${value}`));

console.log("teste async");

// 8 - Async Await

function resolveComDelay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolveu a promise")
    }, 2000)
  })
}

async function chamadaAsync() {
  console.log(`Chamando a promise e esperando o resultado`);

  const result = await resolveComDelay();

  console.log(`O resultado chegou -> ${result}`);
}

chamadaAsync()