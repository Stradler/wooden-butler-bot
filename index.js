const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
var http = require("http");
setInterval(function() {
  http.get("http://intense-ravine-75760.herokuapp.com");
  console.log("omegalul");
}, 300000);
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
  bot.sendMessage(msg.chat.id, "How can I help you, sir?", {
    reply_markup: {
      keyboard: [["/motto"], ["/whoislambert"], ["/helpMeButler"]]
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
