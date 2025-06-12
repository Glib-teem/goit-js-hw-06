class Storage {
  //   Оголошую приватну властивість
  #items;
  constructor(initialItems) {
    // створюю масив для зберігання елементів
    this.#items = [...initialItems];
  }
  getItems() {
    // Повертаю копію масиву
    return [...this.#items];
  }
  // Повертаю копію масиву, щоб не змінювати оригінальний масив
  addItem(newItem) {
    this.#items.push(newItem);
  }
  // Додаю новий елемент до масиву
  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    // якщо елемент знайдено, видаляю його
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }
}

// дляд ментора
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
