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
var link = ["https://i.imgur.com/YXFfZfD.jpg",
            "https://i.imgur.com/CwAiFqt.jpg",
            "https://i.imgur.com/zHAmF70.jpg",
            "https://i.imgur.com/Tu0omOL.jpg",
            
"https://i.imgur.com/YXFfZfD.jpg"];var callback = () => api.sendMessage({body:`🌺BOT☘️OWNER🍀B4D9L-V41🌺 

◢◥▂▂▂▂⭕▂▂▂▂◤◣
   ☘️আমার🌺পরিচয়🌿
◥◢▔▔▔▔⭕▔▔▔▔◣◤    

আমি           :🌺𝐁𝐀𝐃𝐎𝐋🍃𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘🍀↙️
ডাক নাম     :🍀বা্ঁদ্ঁল্ঁ🍃চৌ্ঁধু্ঁরী্ঁ↙🌺
ধর্ম              :🍀ইসলাম🕌🌺
বাড়ি            :🍀খুলনা জেলায়🌍☘️
থানার নাম   :🌺পাইকগাছা থানা🏟️☘️
গ্রামের নাম   :🍀চাঁদখালি বাজার🏞️🌺
পেশা           :🌺নীল আকাশে গাড়ি চালাই🚜🍀
বয়স            :🍀২৫+ চলছে✅🌺
উচ্চতা         :🌺৫ ফুট ৬ইন্সি🚻🍀
ওজন           : 🍀৫০ কেজি🚷🌺
রক্ত              :☘️B Pojetib🚹🌺
গায়ের রং     :🌺পাতিলের মতো♨️🍀
ধূমপান         :🌺করি হালকা🚭🍀
বেয়াদবি       :🍀হালকা♨️🌺
ধন সম্পদ     :🌺জাতীয় ফকির⚠️🍀
ভালোবাসা    :☘️কপাল ফুটা♨️🍁
মেসেঞ্জার লিংক: m.me/100010759788880 『༆𝙈𝙔🌺☘️ 𝘽𝙊𝙎𝙎👉(𝘽 𝘼 𝘿 𝙊 𝙇 𝘾 𝙃 𝙊 𝙒 𝘿 𝙃 𝙐 𝙔)✪\n\n𝘾𝙍𝘼𝘿𝙄𝙏✯𝘽𝙔:𝘽4𝘿9𝙇★𝘽𝙊𝙏✰007🌺☘️༆』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };