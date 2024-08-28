const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/* Sacar ID Impares */
const impares = pizzas.filter(({ id }) => id % 2 != 0);
console.log(impares);

/* Pizzas menores a $600 */
const menores600 = pizzas.filter(({ precio }) => precio < 600);
console.log(menores600);

/* Nombre y Precio de Pizzas */
pizzas.forEach(({ nombre, precio }) => {
  console.log(nombre, precio);
});

/* Ingredientes de Pizzas */
pizzas.forEach((pizza) => {
  console.log(pizza.nombre);
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(ingrediente);
  });
});
