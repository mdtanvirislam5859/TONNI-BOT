module.exports.config = {
	name: "gupname",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Rename your group",
	commandCategory: "Box", 
	usages: "groupname [name]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var name = args.join(" ")
	if (!name) api.sendMessage("❌সরি বস এই নাম টা চেঞ্জ করতে পারলাম না🌿", event.threadID, event.messageID)
	else api.setTitle(name, event.threadID, () => api.sendMessage(`🌺গ্রুপের নাম চেঞ্জ ডান☘️: ${name}`, event.threadID, event.messageID));
}
