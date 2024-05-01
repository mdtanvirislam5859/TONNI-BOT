module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Rup Kumar",
	description: "Get your user ID",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`🌺আপনার ইউ আইডি☘️: \n${event.senderID}\n\n🌺আপনার মেসেঞ্জার লিংক☘️ :\nm.me/${event.senderID}\n\n🌺আপনার ফেসবুক লিংক☘️:\nwww.facebook.com/${event.senderID}`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`🌺🦋আপনার ইউ আইডি🌺🦋${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
  }