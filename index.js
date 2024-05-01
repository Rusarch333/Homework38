'use strict';

// Існує масив:
const products = [
    { id: 1, name: "Молоко", price: 25, quantity: 14, category: "Молочні продукти" },
    { id: 2, name: "Хліб", price: 12, quantity: 100, category: "Хлібобулочні вироби" },
    { id: 3, name: "Яйця", price: 20, quantity: 12, category: "Птахоферма" },
    { id: 4, name: "Масло", price: 35, quantity: 31, category: "Молочні продукти" },
    { id: 5, name: "Цукор", price: 15, quantity: 44, category: "Кондитерські вироби" },
    { id: 6, name: "Картопля", price: 10, quantity: 50, category: "Овочі та фрукти" },
    { id: 7, name: "Помідори", price: 30, quantity: 71, category: "Овочі та фрукти" },
    { id: 8, name: "Індичка", price: 40, quantity: 10, category: "М'ясо та м'ясні вироби" },
    { id: 9, name: "Яловичина", price: 25, quantity: 120, category: "М'ясо та м'ясні вироби" },
    { id: 10, name: "Макарони", price: 18, quantity: 140, category: "Макаронні вироби" },
    { id: 11, name: "Сир", price: 50, quantity: 19, category: "Молочні продукти" },
    { id: 12, name: "Печиво", price: 22, quantity: 56, category: "Кондитерські вироби" },
    { id: 13, name: "Куряче філе", price: 40, quantity: 12, category: "М'ясо та м'ясні вироби" },
    { id: 14, name: "Банани", price: 18, quantity: 63, category: "Овочі та фрукти" },
    { id: 15, name: "Свинина", price: 60, quantity: 3, category: "М'ясо та м'ясні вироби" },
    { id: 16, name: "Чай чорний", price: 30, quantity: 5, category: "Чай та кава" },
    { id: 17, name: "Кава", price: 50, quantity: 8, category: "Чай та кава" },
    { id: 18, name: "Сода", price: 8, quantity: 2, category: "Безалкогольні напої" },
    { id: 19, name: "Сметана", price: 25, quantity: 18, category: "Молочні продукти" },
    { id: 20, name: "Яблука", price: 20, quantity: 88, category: "Овочі та фрукти" }
];

// Використовувати методи масиву та функції стрілки.
let productCategory;

const INITIAL_PRODUCT_QUANTITY = 0;
const INITIAL_PRODUCT_PRICE = 0;

// 1) Розрахувати загальну кількість (quantity) продуктів з категорії "Овочі та фрукти"
productCategory = "Овочі та фрукти";

const vegetablesAndFruitsQuantity = products.reduce((currentVegetablesAndFruitsQuantity, product) => {
  if(product.category === productCategory) {
    return currentVegetablesAndFruitsQuantity + product.quantity;
  }
  return currentVegetablesAndFruitsQuantity;
}, INITIAL_PRODUCT_QUANTITY);

console.log(
  '1) Розрахувати загальну кількість (quantity) продуктів з категорії "Овочі та фрукти": \n',
  vegetablesAndFruitsQuantity,
  '\n'
);

// 2) Розрахувати загальну вартість (quantity*price) продуктів з категорії "Молочні продукти"
const initialDairyProductsPrice = 0;
productCategory = "Молочні продукти";

const dairyProductsPrice = products.reduce((currentDairyProductsPrice, product) => {
  if(product.category === productCategory) {
    return currentDairyProductsPrice + (product.quantity * product.price);
  }
  return currentDairyProductsPrice;
}, INITIAL_PRODUCT_PRICE);

console.log(
  '2) Розрахувати загальну вартість (quantity*price) продуктів з категорії "Молочні продукти": \n',
  dairyProductsPrice,
  '\n'
);

// 3) Повернути новий масив з відсортованими продуктами в порядку зменшення quantity (джерельний масив не змінювати)
const productsSortedDescending = products.toSorted((product, anotherProduct) => anotherProduct.quantity - product.quantity);

console.log(
  '3) Повернути новий масив з відсортованими продуктами в порядку зменшення quantity (джерельний масив не змінювати): \n',
  productsSortedDescending,
  '\n'
);

// 4) Знайти найдешевший та найдорожчий продукти
let mostExpensiveProductPrice = 0;
let cheapestProductPrice = 999999;

const cheapestProduct = products.reduce((currentCheapestProduct, product) => {
  if (product.price <= cheapestProductPrice) {
    cheapestProductPrice = product.price;
    currentCheapestProduct = product;
  }
  return currentCheapestProduct;
}, cheapestProductPrice);

const mostExpensiveProduct = products.reduce((currentMostExpensiveProduct, product) => {
  if (product.price >= mostExpensiveProductPrice) {
    mostExpensiveProductPrice = product.price;
    currentMostExpensiveProduct = product;
  }
  return currentMostExpensiveProduct;
}, mostExpensiveProductPrice);

console.log(
  '4) Знайти найдешевший та найдорожчий продукти: \n',
  'Найдешевший продукт:',
  cheapestProduct,
   '\n',
  'Найдорожчий продукт:',
  mostExpensiveProduct,
   '\n',
);

// 5) Розрахувати середню ціну продуктів з категорії "М'ясо та м'ясні вироби"
const INITIAL_PRODUCTS_STATS = {
  productsTotalPrice: 0,
  productsCount: 0,
}

productCategory = "М'ясо та м'ясні вироби";

const productsMeatCategoryStats = products.reduce((currentProductsStats, product) => {
  if(product.category === productCategory) {
    currentProductsStats.productsCount++;
    currentProductsStats.productsTotalPrice += product.price;
  }
  return currentProductsStats;
}, INITIAL_PRODUCTS_STATS);

console.log(
  '5) Розрахувати середню ціну продуктів з категорії "М\'ясо та м\'ясні вироби": \n',
  productsMeatCategoryStats.productsTotalPrice / productsMeatCategoryStats.productsCount,
  '\n'
);