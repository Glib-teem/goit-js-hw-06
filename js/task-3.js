// Профіль користувача

const profile = {
  username: 'Jacob',
  playTime: 300,

  // Змінюю ім'я користувача

  changeUsername(newName) {
    this.username = newName;
  },

  // Змінюю час гри користувача

  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

// для ментора
console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
