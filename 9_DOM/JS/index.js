// 1 - Movendo-se pelo DOM

console.log(document.body);

console.log(document.body.childNodes);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - Encontrando elementos por TAG

const pickLi = document.getElementsByTagName('li');

console.log(pickLi);

// 3 - Encontrando elementos por ID

const title = document.getElementById("title");

console.log(title);

// 4 - Encontrando elementos por Classe de CSS

const product = document.getElementsByClassName("product")

console.log(product);

// 5 - Encontrando elementos por CSS

const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// 7 - appendChild 

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// 8 - replaceChild

const h2 = document.createElement("h2");

h2.textContent = "Meu novo título";

header.replaceChild(h2, title);

li.textContent = "Sobre nós";

navLinks.replaceChild(li, navLinks.childNodes[6]);

// 9 - createTextNode

const myText = document.createTextNode("Novo Título");

const h3 = document.createElement("h3");

h3.appendChild(myText);

mainContainer.appendChild(h3);

// 10 - Trabalhando com atributos

const firstLink = navLinks.querySelector("a");

firstLink.setAttribute("target", "_blank");
firstLink.setAttribute("href", "https://www.google.com.br");

// 11 - CSS com JS

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "black";
mainContainer.style.padding = "20px";

// 12 - Alterando estilos de vários Elementos

for (const li of pickLi) {
  li.style.color = "red";
  li.style.backgroundColor = "black";
}