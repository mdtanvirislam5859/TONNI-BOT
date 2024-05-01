module.exports.config = {
	name: "gupemoji",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Change your group Emoji",
	commandCategory: "Box", 
	usages: "groupemoji [name]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("🌺সরি বস এটা চেঞ্জ হবেনা ইমজি☘️", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`🌺গ্রুপের ইমজি চেঞ্জ ডান☘️ : ${emoji}`, event.threadID, event.messageID));
}