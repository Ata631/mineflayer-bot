const mineflayer = require("mineflayer");
const express = require("express");

// Ping server (UptimeRobot vs. için)
const app = express();
app.get("/", (req, res) => res.send("Bot aktif!"));
app.listen(3000, () => console.log("Ping server aktif (3000)"));

function startBot() {
  const bot = mineflayer.createBot({
    host: "akinci.play.hosting",
    port: 61647,
    username: "Botmusunolum",
    version: false,
  });

  bot.on("spawn", () => {
    console.log("Bot sunucuya bağlandı!");
  });

  bot.on("kicked", (reason) => {
    console.log("Bot Kick yedi:", reason);
  });

  bot.on("error", (err) => {
    console.log("Hata:", err);
  });

  bot.on("end", () => {
    console.log("Bot bağlantısı koptu → 5 saniye içinde yeniden bağlanıyor...");
    setTimeout(startBot, 5000);
  });

  // AFK koruma (15 saniyede zıplama)
  setInterval(() => {
    try {
      bot.setControlState("jump", true);
      setTimeout(() => bot.setControlState("jump", false), 200);
    } catch {}
  }, 15000);
}

startBot();

