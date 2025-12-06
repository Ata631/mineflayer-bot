const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "emerald.magmanode.com", // Ör: play.example.com
  port: 28683, // Değiştirme! Sunucun farklıysa değiştir
  username: "Botmusunolum", // Premium değilse herhangi bir isim
  version: false,
});

bot.on("spawn", () => {
  console.log("Bot sunucuya bağlandı!");
});

bot.on("end", () => {
  console.log("Bot bağlantısı koptu. Yeniden bağlanıyor...");
  setTimeout(() => process.exit(), 5000);
});
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot aktif!'));
app.listen(3000, () => console.log('Ping server çalışıyor.'));
const mineflayer = require("mineflayer");

function startBot() {
  const bot = mineflayer.createBot({
    host: "emerald.magmanode.com",
    port: 28683,
    username: "Botmusunolum",
    version: false,
  });

  bot.on("spawn", () => {
    console.log("Bot sunucuya bağlandı!");
  });

  bot.on("end", () => {
    console.log("Bot düştü, yeniden bağlanıyor...");
    setTimeout(startBot, 5000);
  });

  bot.on("kicked", console.log);
  bot.on("error", console.log);

  // AFK koruması
  setInterval(() => {
    bot.setControlState("jump", true);
    setTimeout(() => bot.setControlState("jump", false), 250);
  }, 15000);

  return bot;
}

startBot();
