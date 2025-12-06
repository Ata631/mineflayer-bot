const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "dynamic-7.magmanode.com", // Ör: play.example.com
  port: 25680, // Değiştirme! Sunucun farklıysa değiştir
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
