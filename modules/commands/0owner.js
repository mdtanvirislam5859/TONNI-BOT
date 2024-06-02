 module.exports.config = {
	name: "owner",
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
var link = ["https://i.imgur.com/FmQPu48.jpeg",
            "https://i.imgur.com/66kJmaP.jpeg",
            "https://i.imgur.com/0Rl1Cnl.jpeg",
            "https://i.imgur.com/kYzb0Jz.jpeg",
	    "https://i.imgur.com/oKUJVoE.jpeg",
	    "https://i.imgur.com/39cGAoy.jpeg",
            
"https://i.imgur.com/fHGs05V.jpeg"];var callback = () => api.sendMessage({body:`🌺BOT☘️OWNER🍀SAIM SHEIKH🌺 

◢◥▂▂▂▂⭕▂▂▂▂◤◣
   ☘️আমার🌺পরিচয়🌿
◥◢▔▔▔▔⭕▔▔▔▔◣◤    

নাম     :🍀সা্ঁই্ঁম্ঁ🍃শে্ঁখ্ঁ↙🌺
ধর্ম              :🍀ইসলাম🕌🌺
বাড়ি            :🍀মুন্সিগঞ্জ জেলায়🌍☘️
থানার নাম   :🌺টংগীবাড়ি থানা🏟️☘️
গ্রামের নাম   :🍀বালিগাঁও বাজার🏞️🌺
পেশা           :🌺স্টুডেন্ট🥸🍀
বয়স            :🍀১৮+ চলছে✅🌺
রক্ত              :☘️B Pojetib🚹🌺
গায়ের রং     :🌺পাতিলের মতো♨️🌺
বেয়াদবি       :🍀হালকা♨️🌺
ধন সম্পদ     :🌺জাতীয় ফকির⚠️🍀
ভালোবাসা    :☘️কপাল ফুটা♨️🍁
মেসেঞ্জার লিংক: m.me/61556537307728 『༆𝙈𝙔🌺☘️ 𝘽𝙊𝙎𝙎👉(𝐒 𝐀 𝐈 𝐌 𝐒 𝐇 𝐄 𝐈 𝐊 𝐇)✪\n\n𝘾𝙍𝘼𝘿𝙄𝙏✯𝘽𝙔:𝙏𝙊𝙉𝙉𝙄★𝘽𝙊𝙏🌺☘️༆』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
