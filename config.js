//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "260971816956";
global.owner = process.env.OWNER_NUMBER || "260971816956";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1BDTDlPZG9FUnVKZ1FuMUhHRXh1SnNMTDh3LzJOeEt4ZlltNHN2SmFtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFdkSnlOV1AvOGtBRXNCY1lWaWFmemIyQk9ZSzRPY3NWRDlWYmFRVTYzYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR1NSWXhjRnVQNU1WUjNqeWhnR1hSMjNZb0N0NXNaNzFXcmQ3V0VTd0dRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuNjZVZ3Y5Yk5yR04xS1A4RlRlWWhvSU1pWEpjd2hSK1hBcEpvK2wyY2hNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQVGlSdzlwSE94bllHLy84UjZrUVAwOHV6SHMzamJUTm1lOWE0bEpTRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZKWjJIQ1Jza2JyTFVNS29TaEhMTTg3V09OWUwwQ1JyUm00V2Z3ZUM1V3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUk1Smh1M0tBa1diYnhqWUxraENDaUxIUGtrQVp5ZjRzakYzTUJUMVNFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0lRbHB6Z2FOYW9tR1U3N1pTdUZqOG9ybENsdzVwcVFKdFVjSDU1U05UST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpsVSs0Wk5vbHQwaE80Zk1tSW9vL3pibFN0M2U0YURvZ1FseEJ2ZVFyb0NHa1FBS01ZYkxBb1JTNWM3MkNrZDZ0bHZmcms4cGJWRHczR0diZUhHRGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6Ikg1dXM1V1FOeWZqK0ZHVkI0T3BzN0t6dE1VL2duQldIMGFEM1cxMWJuQU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZuNFFFazdOU3Q2UGRaNVlHNzJ1UmciLCJwaG9uZUlkIjoiYWUzYTgwYzAtYWJiYi00YmM5LWEzODgtOTBiYTZkZDY0ZGI0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYxQUlvZjRoY1U1QmZhQm5QYWlTOWp1V0JNTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvWU9YWXYweTZEcmpBMnZyR3JuTlowQW1obm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR1FaN0NKVlgiLCJtZSI6eyJpZCI6IjI2MDk3MTgxNjk1Njo2MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNYWtvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLcXBsc2tFRUlidmxMUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5d3RnQXloRXY3bEVkQUFKbDFBTmRPNks0M3lTTzN6UDNEZ0pjS1NPaW13PSIsImFjY291bnRTaWduYXR1cmUiOiIyaERpRGpCaVgwZjVISVNTeEtTNHZtcDVid29kU1VmSVRHd3ExakdJbWRYajFncXZRUjZ6UnpYL0syUlFyZWxZK0Fodjhvc2gwNFNDWlcwR2RTK3lBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidXV1bytYUTh0OXpvVlZqbVRNcS9PdmxxSW5aa1RvT1BveDA0NUd2Rm9SOC8yVVZ2ZFZLWGhmQkF3b0xJWXVqazNlSTlFeWJQa2d4aDdTYVBONEtLaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjA5NzE4MTY5NTY6NjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmNMWUFNb1JMKzVSSFFBQ1pkUURYVHVpdU44a2p0OHo5dzRDWENram9wcyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDAwNjU0N30="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is KING 👑 MAKO",
  author: process.env.PACK_AUTHER || "KING👑MAKO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "KING👑MAKO",
  ownername: process.env.OWNER_NAME || "KING👑MAKO",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KING👑MAKO").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
