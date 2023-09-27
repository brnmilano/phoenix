// 1 - Adicionando Eventos

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Clicou em mim");
})

// 2 - Removendo Eventos

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("Mensagem impressa");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
})

// 3 - Argumento do Evento

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target);
});

// 4 - Propagação

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", (event) => {
  console.log("Evento 1");
})

btnInsideContainer.addEventListener("click", (event) => {
  event.stopPropagation();

  console.log("Evento 2");
})

// 5 - Removendo Evento padrão

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();

  console.log("Não foi para o Google");
})

// 6 - Eventos de Tecla 

document.addEventListener("keyup", (event) => {
  console.log(`Soltou a tecla ${event.key}`);
});

document.addEventListener("keydown", (event) => {
  console.log(`Apertou a tecla ${event.key}`);
});

// 7 - Eventos de Mouse

const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
  console.log("Pressionou o botão do mouse");
});

mouseEvents.addEventListener("mouseup", () => {
  console.log("Soltou o botão do mouse");
});

mouseEvents.addEventListener("dblclick", () => {
  console.log("Click duplo");
})

// 8 - Eventos de movimento do Mouse

document.addEventListener("mousemove", (event) => {
  //console.log(`No eixo X ${event.x}`);
  //console.log(`No eixo Y ${event.y}`);
})

// 9 - Eventos por Scroll

window.addEventListener("scroll", (event) => {
  if (window.scrollY > 200) {
    console.log("Passamos 200px");
  }
});

// 10 - Evento de Foco

const focusInput = document.querySelector("#my-input");

focusInput.addEventListener("focus", (event) => {
  console.log("Entrou no input");
});

focusInput.addEventListener("blur", (event) => {
  console.log("Saiu do input");
});

// 11 - Evento de carregamento da Tela

window.addEventListener("load", (event) => {
  console.log("A tela carregou");
});

// 12 - Debounce