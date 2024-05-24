const axios = require("axios");

module.exports.config = {
	name: "mj",
	version: "1.0.0",
	credits: "Yan Maglinte",
	description: "Create image from your text",
	usePrefix: true,
	commandCategory: "Mid-jurney a.i",
	cooldowns: 5,
	dependencies: [],
};

module.exports.languages = {
	tl: {
		syntaxError: "⚠️ Mangyaring maglagay ng prompt",
		error: "❗ ERROR: %1",
		serverError: "🌺Saim Server ERR",
	},
	en: {
		syntaxError: "⚠️ Please enter prompt",
		error: "❗ An error has occurred, please try again later: %1",
		serverError: "❗ Server is overloaded, please try again later",
	},
};

module.exports.run = async function ({ api, event, args, getText }) {
	const prompt = args.join(" ");
	if (!prompt)
		return api.sendMessage(getText("syntaxError"), event.threadID);

	const adminUID = "100004504180813"; // Replace with your admin UID

	if (event.senderID !== adminUID)
		return api.sendMessage("🌺এটা অনলি সাইম শেখ এর জন্য বাজান🌺🤦‍♂️", event.threadID);

	try {
		const { data: imageStream } = await axios({
			url: "https://goatbotserver.onrender.com/taoanhdep/texttoimage",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data: {
				prompt,
				styleId: 28,
				aspect_ratio: "1:1",
			},
			responseType: "stream",
		});

		imageStream.path = "image.jpg";

		return api.sendMessage(
			{
				attachment: imageStream,
			},
			event.threadID
		);
	} catch (err) {
		return api.sendMessage(
			getText("error", err.response?.data?.message || err.message),
			event.threadID
		);
	}
};
