const fs = require("fs");
module.exports.config = {
	name: "mcs8",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "BADOL-KHAN", 
	description: "mcs emoji reply",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤣")==0 || event.body.indexOf("😂")==0 ||  event.body.indexOf("😹")==0) {
		var msg = {
				body: "╭•┄┅══𝙏𝙊𝙉𝙉𝙄-𝘽𝙊𝙏══┅┄•╮\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n\nꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝙎𝘼𝙄𝙈-𝙎𝙃𝙀𝙄𝙆𝙃ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰•┄┅══𝙏𝙊𝙉𝙉𝙄-𝘽𝙊𝙏══┅┄•╯",
				attachment: fs.createReadStream(__dirname + `/badol-khan/pagolnaki.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤦‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
