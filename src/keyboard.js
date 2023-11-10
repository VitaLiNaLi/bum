// // Умеешь работать с keypress? Попробуй разобраться в этом файле.
// // Вместо keypress можно использовать и стандартный readline.
// // Главное не используй всё вместе!

const keypress = require("keypress");
const Hero = require("./game-models/Hero");

class Key {
  // Какая-то функция.

  static runInteractiveConsole(hero) {
    const keyboard = {
      q: () => console.log((hero -= 1)),
      w: () => console.log("w"),
      e: () => (hero += 1),
      r: () => console.log("r"),
      t: () => console.log("t"),
      y: () => console.log("y"),
    };
    keypress(process.stdin);
    process.stdin.on("keypress", (ch, key) => {
      if (key) {
        // Вызывает команду, соответствующую нажатой кнопке.
        if (key.name in keyboard) {
          return keyboard[key.name]();
        }
        // Прерывание программы.
        if (key.ctrl && key.name === "c") {
          process.exit();
        }
      }
    });
    process.stdin.setRawMode(true);
  }
}

module.exports = Key;
