const fs = require("fs");
module.exports.config = {
	name: "bossbg",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by Badol", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "bossbg",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Saim Vai")==0 || event.body.indexOf("@Tonni Akter")==0 || event.body.indexOf("Saim vai")==0 ||
event.body.indexOf("@MD Billal Akondo")==0 ||
event.body.indexOf("সাইম ভাই")==0 ||
event.body.indexOf("সাইম")==0 ||
event.body.indexOf("saim")==0 ||
event.body.indexOf("Saim")==0 || event.body.indexOf("@Raja Babu Bieber")==0) {
		var msg = {
				body: "🌺বস এখন বিজি🌺\n\n☘️𝐓 𝐎 𝐍 𝐍 𝐈^𝐁 𝐎 𝐓🌺",
				attachment: fs.createReadStream(__dirname + `/badol/amibg.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
