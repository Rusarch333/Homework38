"use strict";

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

const PRODUCT_INITIAL_QUANTITY = 0;
const PRODUCT_INITIAL_PRICE = 0;

// 1) Розрахувати загальну кількість (quantity) продуктів з категорії "Овочі та фрукти"
productCategory = "Овочі та фрукти";

const productsVegetablesAndFruits = products.filter(
  (product) => product.category === productCategory
);
const productsVegetablesAndFruitsTotalQuantity =
  productsVegetablesAndFruits.reduce(
    (productsTotalQuantity, product) =>
      productsTotalQuantity + product.quantity,
    PRODUCT_INITIAL_QUANTITY
  );

console.log(
  '1) Розрахувати загальну кількість (quantity) продуктів з категорії "Овочі та фрукти": \n',
  productsVegetablesAndFruitsTotalQuantity,
  "\n"
);

// 2) Розрахувати загальну вартість (quantity*price) продуктів з категорії "Молочні продукти"
productCategory = "Молочні продукти";

const productsDairy = products.filter(
  (product) => product.category === productCategory
);
const productsDairyTotalPrice = productsDairy.reduce(
  (productsTotalPrice, product) =>
    productsTotalPrice + product.quantity * product.price,
  PRODUCT_INITIAL_PRICE
);

console.log(
  '2) Розрахувати загальну вартість (quantity*price) продуктів з категорії "Молочні продукти": \n',
  productsDairyTotalPrice,
  "\n"
);

// 3) Повернути новий масив з відсортованими продуктами в порядку зменшення quantity (джерельний масив не змінювати)
const productsSortedDescending = products.toSorted(
  (product, anotherProduct) => anotherProduct.quantity - product.quantity
);

console.log(
  "3) Повернути новий масив з відсортованими продуктами в порядку зменшення quantity (джерельний масив не змінювати): \n",
  productsSortedDescending,
  "\n"
);

// 4) Знайти найдешевший та найдорожчий продукти
const productsSortedAscendingByPrice = products.toSorted(
  (product, anotherProduct) => product.price - anotherProduct.price
);

console.log(
  "4) Знайти найдешевший та найдорожчий продукти: \n",
  "Найдешевший продукт:",
  productsSortedAscendingByPrice.at(0),
  "\n",
  "Найдорожчий продукт:",
  productsSortedAscendingByPrice.at(-1),
  "\n"
);

// 5) Розрахувати середню ціну продуктів з категорії "М'ясо та м'ясні вироби"
productCategory = "М'ясо та м'ясні вироби";

const productsMeatCategory = products.filter(
  (product) => product.category === productCategory
);
const productsMeatCategoryTotalPrice = productsMeatCategory.reduce(
  (productsTotalPrice, product) => productsTotalPrice + product.price,
  PRODUCT_INITIAL_PRICE
);
console.log(
  "5) Розрахувати середню ціну продуктів з категорії \"М'ясо та м'ясні вироби\": \n",
  productsMeatCategoryTotalPrice / productsMeatCategory.length,
  "\n"
);
