function isEnoughCapacity(products, containerSize) {
  // Отримую масив значень
  // викор п-три ф-ції для збору значень

  function sumQuantities(...quantities) {
    // підраховую загальну суму, якщо порожній = 0

    return quantities.reduce((total, current) => total + current, 0);
  }

  // Отрмую к-сть продуктів

  const productsQuantities = Object.values(products);

  // викор spread оператор для розгортання масиву

  const totalProducts = sumQuantities(...productsQuantities);

  // Порівнюю з розміром контейнера

  return totalProducts <= containerSize;
}

// для ментора

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
