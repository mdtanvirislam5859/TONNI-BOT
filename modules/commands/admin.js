module.exports.config = {
	name: "inf",
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
var link = ["https://i.imgur.com/AwnlJ2t.jpeg",
            "https://i.imgur.com/3apAYvi.jpeg",
            "https://i.imgur.com/8kox7uW.jpeg",
            "https://i.imgur.com/dVRNifU.jpeg",
            
"https://i.imgur.com/dYsvvIW.jpeg"];var callback = () => api.sendMessage({body:`🌺𝐓𝐎𝐍𝐍𝐈🍀𝐁𝐎𝐓🌺 

☘️𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : ${global.config.BOTNAME}🌺𝐒𝐀𝐈𝐌☘️

🌺𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 : ☘️『𝐒𝐀𝐈𝐌✓𝐒𝐇𝐄𝐈𝐊𝐇』🌺

☘️𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 : https://www.facebook.com/editor.saim

🌺𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ${global.config.PREFIX}

☘️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 : 🌺『সা্ঁই্ঁম্ঁ🍁শে্ঁখ্ঁ』☘️

🌺➟ 𝐔𝐏𝐓𝐈𝐌𝐄☘️

☘️𝐓𝐎𝐃𝐀𝐘 𝐈𝐒 𝐓𝐈𝐌𝐄 : ${juswa} 

🌺𝐁𝐎𝐓 𝐈𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 ${hours}:${minutes}:${seconds}.

𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆 ${global.config.BOTNAME}🌺𝐒𝐀𝐈𝐌☘️


『༆𝐌𝐘🌺☘️ 𝐁𝐎𝐒𝐒👉(𝐒 𝐀 𝐈 𝐌 𝐕 𝐀 𝐈)✪\n\n𝐂𝐑𝐀𝐃𝐈𝐓✯𝐁𝐘:𝐓 𝐎 𝐍 𝐍 𝐈★𝐁 𝐎 𝐓🌺☘️༆』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
