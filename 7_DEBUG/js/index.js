// 1 - Stric Mode

"use strict";

//opa = "teste";

const opa = "teste";

// 3 - Debugger

let c = 1;
let d = 2;

if (c == 1) {
  c = d + 1
}

//debugger;

// 4 - Tratamento de dado por função

function checkNumber(n) {
  const result = Number(n);

  if (Number.isNaN(result)) {
    console.log("Valor inválido");

    return result
  }

  console.log("Valor válido");

  return result;
};

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste");

// 5 - Exceptions

let x = 10;

if (x !== 11) {
  //throw new Error("O valor de x não pode ser diferente de 11");
}

// 6 - Try Catch

try {
  const soma = x + y;
} catch (error) {
  console.log(`Erro no programa ${error}`);
}

// 7 - Finally

try {
  const value = checkNumber("1")

  if (!value) {
    throw new Error("Valor está inválido");
  }
} catch (error) {
  console.log(`Erro no programa ${error}`);
} finally {
  console.log("O código foi executado");
}

// 8 - Assertions

function checkArray(arr) {
  if (arr.length === 0) {
    throw new Error("O array não pode ser vazio");
  }

  else {
    console.log(`O array tem ${arr.length} elementos`);
  }
}

//checkArray([]);

checkArray([1, 2, 3])