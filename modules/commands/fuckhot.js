/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "fuckv5",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Badol",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["আজ আমি তোমাদের হাত মারা শিখাবো",
             "তেল নিয়া আসো সবাই",
             "উম্মম ব্যাথা পাই তো",
             "যৌবন জ্বালা কেন সমাজ বুঝে না",
             "ভোদা তা বড় থাকলে ,মাথাও ঢুকে যায় ",
             "হাত মারাই প্রকৃত সুখ",
             "চুদলে চুদো না হলে অন্য জন কে সুযোগ করে দাও"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/QCb00kbd/download.jpg",
  "https://i.postimg.cc/yYrdFhS3/download.jpg",
  "https://i.postimg.cc/qMnJ3f0S/OIP-1.jpg",
  "https://i.postimg.cc/9QZDCRr4/OIP-2.jpg",
  "https://i.postimg.cc/P5yPCGQh/OIP-3.jpg",
  "https://i.postimg.cc/PJnt6KQ2/OIP-4.jpg",
  "https://i.postimg.cc/cLwB2JWh/OIP-5.jpg",
  "https://i.postimg.cc/28zqr8nT/OIP-6.jpg",
  "https://i.postimg.cc/T2QdjjWq/OIP-7.jpg",
  "https://i.postimg.cc/WpfRb5kK/OIP-8.jpg",
  "https://i.postimg.cc/Qty6snyJ/OIP-9.jpg",
  "https://i.postimg.cc/tgS0ZkcY/OIP-11.jpg",
  "https://i.postimg.cc/pLckKS2b/OIP.jpg",
  "https://i.postimg.cc/kGjRLkY7/R.jpg",
  "https://i.postimg.cc/zXbfJbVC/sunny-leone-maxim-magazine-2013-photoshoot.jpg",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };