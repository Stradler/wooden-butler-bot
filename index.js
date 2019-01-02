const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/motto/, (msg) => {
  bot.sendMessage(msg.chat.id, "Вуд Дивижн Эстетичней Парижа");
});

bot.onText(/\/whoislambert/, (msg) => {
  bot.sendMessage(msg.chat.id, "Ламберт пидр");
});

bot.onText(/\/helpMeButler/, (msg) => {
  bot.sendMessage(msg.chat.id, "No help in hell");
});

bot.onText(/\/startButler/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    reply_markup: {
      keyboard: [["/motto"], ["/whoislambert"], ["/help"]]
    }
  });
});

bot.on("message", (msg) => {
  var bye = "bye";
  if (
    msg.text
      .toString()
      .toLowerCase()
      .includes(bye)
  ) {
    bot.sendMessage(msg.chat.id, "Have a nice day " + msg.from.first_name);
  }
});

module.exports = (req, res) => {
  res.end(`Hi!`);
};
