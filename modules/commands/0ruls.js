module.exports.config = {
	name: "ruls",
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
            
"https://i.imgur.com/YXFfZfD.jpg"];var callback = () => api.sendMessage({body:`গ্রুপ রুল্স মেনে চলুন ধন্যবাদ

(1) :এডমিনকে সম্মান করুন↙️

(2): কাউকে গালি দিবেন না।↙️

(3): গ্রুপ রুলস মেনে চলুন🥀

(4): বট সম্পর্কে জানতে বট (Owner) কে👉 ইনবক্স (Inbox) করুন 🌍 
(5): বট এডমিন : 🌺✰𝐁𝐀𝐃𝐎𝐋^𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘★🌺

(6): পারমিশন ছাড়া বট অন্য গ্রুপে এড করবে না।❌

(7): গ্রুপের মধ্যে অবস্থিত মেয়েদেরকে বিরক্ত করলে যথাযথ ব্যবস্থা নেওয়া হবে। ↙️

(8):  সম্মান দিয়ে কথা বলুন,ভদ্রভাবে ব্যবহার করুন ↙️

(9): গ্রুপের মধ্যে অশ্লীলতা থেকে বিরত থাকবে।↙️

(10): এডমিনদের কথামতো চলবেন।↙️

(11) : সকল ধর্মকে সন্মান দিবেন।↙️

(12): গ্রুপে কনো কারন ছাড়া ইমজি দিবেন না♨↙️

(13): গ্রুপ থেকে লিভ নিতে চাইলে ইডমিন কে বলবেন।↙️

(14): বট Prefix এটা (.)👈 ব্যবহার করবেন↙️

(15): উল্টা-পাল্টা কমান্ড দিবেন না কিক ফ্রি তাহলে↙️

(16): আর কারো পার্সোনাল গ্রুপে বট লাগলে অবশ্য বস

 🌺✰𝐁𝐀𝐃𝐎𝐋^𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘★🌺 কে ইনবক্সে রবেন লিংক নিচে দেয়া আছে↙⬇️

(https://www.facebook.com/BADOL.CHOWDHURY.TERA.REAL.ABBU

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };