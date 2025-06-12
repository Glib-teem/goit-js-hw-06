class StringBuilder {
  // оголошую приватну властивість
  #value;
  constructor(initialValue) {
    // записую приватну властивість #value
    this.#value = initialValue;
  }
  getValue() {
    // Повертаю значення приватної властивості #value
    return this.#value;
  }
  padEnd(str) {
    // Метод для додавання рядка в кінець
    this.#value += str;
  }
  padStart(str) {
    // Метод для додавання рядка на початок
    this.#value = str + this.#value;
  }
  padBoth(str) {
    // Метод для додавання рядка на початок і в кінець
    this.#value = str + this.#value + str;
  }
}
// Дляд ментора
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
