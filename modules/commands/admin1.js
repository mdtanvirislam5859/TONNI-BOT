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
var link = ["https://i.imgur.com/YXFfZfD.jpg",
            "https://i.imgur.com/CwAiFqt.jpg",
            "https://i.imgur.com/zHAmF70.jpg",
            "https://i.imgur.com/Tu0omOL.jpg",
            
"https://i.imgur.com/YXFfZfD.jpg"];var callback = () => api.sendMessage({body:`🌺𝐁4𝐃9𝐋☘️𝐕41🍀𝐁𝐎𝐓-007🌺 

DO NOT TRUST THE BOT OPERATOR
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐊𝐇𝐔𝐋𝐍𝐀.
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐊𝐇𝐔𝐋𝐍𝐀.𝐏𝐀𝐈𝐊𝐆𝐀𝐂𝐇𝐀
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏𝟖+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐉𝐨𝐛
𝐆𝐦𝐚𝐢𝐥       : badolchowdhury@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+88017827?????
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/𝐁𝐀𝐃𝐎𝐋𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/BADOL.CHOWDHURY.TERA.REAL.ABBU


『༆𝐌𝐘🌺☘️ 𝐁𝐎𝐒𝐒👉(𝐁 𝐀 𝐃 𝐎 𝐋 𝐕 𝐀 𝐈 )✪\n\n𝐂𝐑𝐀𝐃𝐈𝐓✯𝘽𝙔:𝐁4𝐃9𝐋᯽𝐕41★𝐁 𝐎 𝐓✰0 0 7🌺☘️༆』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };