module.exports.config = {
	name: "ata",
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
            
"https://i.imgur.com/dYsvvIW.jpeg"];var callback = () => api.sendMessage({body:`🌺আসালামু-আলাইকুম🌺

🌺🦋এই-বট-দ্বারা-সুরক্ষিত🦋🌺\n🌺🦋𝐒𝐀𝐈𝐌🌿𝐒𝐇𝐄𝐈𝐊𝐇🦋🌺\n
¶────██████────¶
 
¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶─◥██████████◤─¶

¶──◥████████◤──¶

¶────◥████◤────¶

¶─────◥██◤─────¶
\n🌺🦋অনুমোদনের-জন্য-আমার-ফেসবুক-অ্যাকাউন্টের-সাথে-যোগাযোগ-করুন🦋🌺\https://www.facebook.com/editor.saim🦋🌿`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
