module.exports.config = {
	name: "jummah",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/bd9C0lj.jpg",
            "https://i.imgur.com/SA7gxQ4.jpg",
            "https://i.imgur.com/bd9C0lj.jpg",
            "https://i.imgur.com/SA7gxQ4.jpg",
            
"https://imgur.com/rWIYJsc.png"];var callback = () => api.sendMessage({body:`🌺𝐒𝐀𝐈𝐌☘️𝐕𝐀𝐈🍀𝐁𝐎𝐓🌺 

🕌🕋
.... 人
...( ◎ )._______人
..║ ∩║____.-:'''"''";-.
..║ ∩║___(*(*(*|*)*)*)
..║ ∩║_. ║∩∩ ∩ ∩║
█ █ █ █ ██ █ █ █ █ █ █🕋🕌🕋🕌🕋🕌🕋🕌

🕋🕌🕋JummahღMubarak🕋🕌🕋࿐
🕌🕌🕌🕌জুম্মা মোবারক🕌🕌🕌🕌

❥━ღ❛ আসসালামু্ঁ আলাইকুম❛ ❛ 
                    ❛আজ শুক্রবার পবিএ জুম্মার দিন❛ ❛কোন এক শু্lক্রবারেই এই 彡দুনিয়া বিলিন হয়ে যাবে-ღ
࿐গুনাহ মাফের আরেকটি দিন পবিত্র জুম্মার দিন💞

❥━ღ❛হে আল্লাহ্ আজকের এইদিনে❛ ❛ 
                      ❛ ❛আমাদের পাপ কাজ 彡-ღক্ষমা করে দাও..... 🤲🤲আমিন ࿐❤🌸

彡-ღ🕋🕋জুম্মা মোবারক সবাইকে.....🕋🕋࿐
꧁҉ཽ❥◎⃝❥͜͜͡͡🌻সা্ঁই্ঁম্ঁ☘🌺শে্ঁখ্ঁ❁ཻ͜͡ღ᭄ 『༆𝐌𝐘🌺☘️ 𝐁𝐎𝐒𝐒👉(𝐒 𝐀 𝐈 𝐌 𝐒 𝐇 𝐄 𝐈 𝐊 𝐇)✪\n\n𝐂𝐑𝐀𝐃𝐈𝐓✯𝐁𝐘:𝐒𝐀𝐈𝐌᯽𝐕𝐀𝐈★𝐁𝐎𝐓🌺☘️༆』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
