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
	if (event.body.indexOf("Badol Vai")==0 || event.body.indexOf("@মিম আক্তার")==0 || event.body.indexOf("Badol vai")==0 ||
event.body.indexOf("@BADOL CHOWDHURY")==0 ||
event.body.indexOf("রাজা ভাই")==0 ||
event.body.indexOf("রাজা বাবু")==0 ||
event.body.indexOf("badol")==0 ||
event.body.indexOf("Badol")==0 || event.body.indexOf("@Raja Babu Bieber")==0) {
		var msg = {
				body: "🌺বস এখন বিজি🌺\n\n☘️𝐁 𝐀 𝐃 𝐎 𝐋^𝐁 𝐎 𝐓^0 0 7🌺",
				attachment: fs.createReadStream(__dirname + `/badol/amibg.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }