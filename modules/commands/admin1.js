module.exports.config = {
	name: "admin",
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

DO NOT TRUST THE BOT OPERATOR
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐒𝐀𝐈𝐌 𝐒𝐇𝐄𝐈𝐊𝐇.
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐌𝐃 𝐁𝐈𝐋𝐋𝐀𝐋 𝐀𝐊𝐎𝐍𝐃𝐎.
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐒𝐋𝐀𝐌.
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐌𝐔𝐍𝐒𝐇𝐈𝐆𝐀𝐍𝐉.
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐃𝐇𝐀𝐊𝐀.𝐌𝐔𝐍𝐒𝐇𝐈𝐆𝐀𝐍𝐉.
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐀𝐋𝐄.
𝐀𝐠𝐞           : 𝟏𝟖+.
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐈𝐍𝐆𝐋𝐄.
𝐖𝐨𝐫𝐤        : 𝐉𝐎𝐁.
𝐆𝐦𝐚𝐢𝐥       : mdsaimsheikh271@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801931578887
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/editor_saim_sheikh
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/editor.saim


『༆𝐌𝐘🌺☘️ 𝐁𝐎𝐒𝐒👉(𝐒 𝐀 𝐈 𝐌 𝐕 𝐀 𝐈)✪\n\n𝐂𝐑𝐀𝐃𝐈𝐓✯𝐁𝐘:𝐓 𝐎 𝐍 𝐍 𝐈★𝐁 𝐎 𝐓🌺☘️༆』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
