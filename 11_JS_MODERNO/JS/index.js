// 1 - Filter

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterNumbers = arrayNumbers.filter((number) => {
  if (number > 5) {
    return number;
  }
});

console.log({ filterNumbers });

const users = [
  {
    name: "Mateus",
    available: false,
  },
  {
    name: "José",
    available: true,
  },
  {
    name: "Ana",
    available: false,
  },
  {
    name: "Cláudia",
    available: true,
  },
  {
    name: "Bruna",
    available: true,
  },
];

const usersAvailableFilter = users.filter((user) => user.available);

console.log({ usersAvailableFilter });

// 2 - Map

const products = [
  { name: "Produto 1", price: 10.99, category: "Eletrônicos" },
  { name: "Produto 2", price: 24.99, category: "Roupas" },
  { name: "Produto 3", price: 5.49, category: "Alimentos" },
  { name: "Produto 4", price: 15.79, category: "Eletrônicos" },
  { name: "Produto 5", price: 7.99, category: "Roupas" }
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  };
});

console.log(products);

// 3 - Template Literals

const user = "Bruno";
const age = 27;

console.log(`O nome do usuário é ${user} e tem ${age} anos`);

// 4 - Destructuring 

const saleProducts = {
  name: "Telefone",
  price: 1500,
  category: "Eletrônicos",
  warranty: true ? "Sim" : "Não",
};

const { name: productName, price, category, warranty } = saleProducts;

console.log(`O ${productName} custa R$${price} e pertence a categoria ${category}. O produto possui garantia? ${warranty}`);

// 5 - Spread Operator

const carName = { name: "Gol" }
const carBrand = { brand: "VW" }
const enginePower = { engine: "1.6" }
const color = { color: "Preto" }
const year = { year: "2021" }

const car = { ...carName, ...carBrand, ...enginePower, ...color, ...year }

console.log({ car });

// 6 - Classes

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa", 100);

console.log(shirt);
console.log(shirt.productDiscount(10));
console.log(shirt.productDiscount(20));

// 7 - Herança 

class ProductAttributes extends Product {
  constructor(name, price, color) {
    super(name, price);
    this.color = color;
  };

  showColors() {
    console.log("As cores são:");

    this.color.forEach((color) => {
      console.log(color);
    });
  };
};

const hat = new ProductAttributes("Chapeu", 50, ["Preto", "Branco", "Verde"]);

console.log(hat);

console.log(hat.name);