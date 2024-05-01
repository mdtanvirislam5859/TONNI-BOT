const fs = require("fs");
const axios = require("axios")
module.exports.config = {
	name: "guppp",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Change your group image",
	commandCategory: "Box", 
	usages: "groupimage", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event }) => {
	if (event.type !== "message_reply") return api.sendMessage("❌ 𝐘𝐨𝐮 𝐇𝐚𝐯𝐞 𝐓𝐨 𝐑𝐞𝐩𝐥𝐲 𝐓𝐨 𝐀 𝐏𝐡𝐨𝐭𝐨", event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("❌ 𝐘𝐨𝐮 𝐇𝐚𝐯𝐞 𝐓𝐨 𝐑𝐞𝐩𝐥𝐲 𝐓𝐨 𝐀 𝐏𝐡𝐨𝐭𝐨", event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(`𝐏𝐥𝐞𝐚𝐬𝐞 𝐑𝐞𝐩𝐥𝐲 𝐎𝐧𝐥𝐲 1 𝐏𝐡𝐨𝐭𝐨!`, event.threadID, event.messageID);
	var abc = event.messageReply.attachments[0].url
	let pathImg = __dirname + '/cache/loz.png';
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(pathImg, Buffer.from(getdata, 'utf-8'));
    return api.changeGroupImage(fs.createReadStream(__dirname + '/cache/loz.png'), event.threadID, () => fs.unlinkSync(pathImg), event.messageID);
}