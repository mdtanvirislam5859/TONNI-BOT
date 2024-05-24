module.exports.config = {
  name: "neymar",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Robin Ahmed", //don't change credit : api.control's.itz-robin
  description: " Neymar pitcher ❤️ ",
  commandCategory: "image",
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
   var hi = ["Neymar pitcher 💙 :50+☘️𝐓𝐎𝐍𝐍𝐈^𝐁𝐎𝐓^007🌺",
             "Neymar pitcher 🖤 :50+☘️𝐓𝐎𝐍𝐍𝐈^𝐁𝐎𝐓^007🌺"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.ibb.co/RPF1S0R/e553a0b6e7d39b06f4651c4a20db8807.jpg",
"https://i.ibb.co/hVhkgSJ/36822b85251766030398dbb35b3708fb.jpg",
"https://i.ibb.co/vxHvXvF/ca5421b7a1a5efe817fe8ec90fe5d169.jpg",
"https://i.ibb.co/7JHmx5Y/5843a2f45da84e6f035de5aedfc6de12.jpg",
"https://i.ibb.co/ZgMr530/749845ac55b375af37617794f0d5f68c.jpg",
"https://i.ibb.co/k0pVWN2/4c1c5560d765a742e2f2d3038c9a335e.jpg",
"https://i.ibb.co/ngybtkr/43fb0ecb09e2341e276c5ec103ff174a.jpg",
"https://i.ibb.co/tpmCqn8/3542c061a31cc945e14df173cd42d204.jpg",
"https://i.ibb.co/7tst3bH/9a242c21de4c9a8cba2df977c8ef1dc4.jpg",
"",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
