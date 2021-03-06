const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });
const express = require("express");
const axios = require("axios");
const app = express();
setInterval(function() {
  axios.get("https://intense-ravine-75760.herokuapp.com/");
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

app.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});
