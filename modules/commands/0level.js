const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');

const cachePath = path.join(__dirname, 'cache', 'checktt.json');

function initializeCache() {
  if (!fs.existsSync(cachePath)) {
    const initialCache = [];
    fs.writeFileSync(cachePath, JSON.stringify(initialCache, null, 2));
  }
}

module.exports.config = {
  name: 'check',
  version: '1.0.0',
  hasPermssion: 0,
  credits: 'Zia Rein',
  description: 'Check rank',
  commandCategory: 'rank',
  usages: `number of messages\n\nHow to use?\n${global.config.PREFIX}check <all or blank>\n\nExample:\n${global.config.PREFIX}check all\n${global.config.PREFIX}check <send msg>\n`,
  cooldowns: 5
};

module.exports.onLoad = function () {
  initializeCache();
};

module.exports.handleEvent = async ({ event, Users }) => {
  const { threadID, senderID, participantIDs } = event;

  if (!event.isGroup) return;

  const cache = JSON.parse(fs.readFileSync(cachePath));
  const threadData = cache.find(item => item.threadID === threadID);

  if (!threadData) {
    const data = participantIDs
      .filter(userID => {
        const name = Users.getName(userID);
        return name && name !== 'Facebook user';
      })
      .map(userID => ({
        name: Users.getName(userID),
        id: userID,
        exp: 0
      }));

    cache.push({ threadID, data });
  } else {
    const userData = threadData.data.find(item => item.id === senderID);

    if (!userData) {
      threadData.data.push({
        name: Users.getName(senderID),
        id: senderID,
        exp: 0
      });
    } else {
      userData.exp += 1;
    }
  }

  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
};

module.exports.run = async function ({ args, api, event }) {
  const { threadID, messageID, mentions } = event;
  const cache = JSON.parse(fs.readFileSync(cachePath));
  const threadData = cache.find(item => item.threadID === threadID);

  if (args[0] === 'all') {
    const expData = threadData ? threadData.data : [];
    const sortedData = expData.sort((a, b) => b.exp - a.exp);
    const limit = parseInt(args[2]) || 20;
    const page = parseInt(args[1]) || 1;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = sortedData.slice(startIndex, endIndex);

    const numPages = Math.ceil(sortedData.length / limit);
    let msg = 'Ranking list:\n\n';

    paginatedData.forEach((userData, index) => {
      msg += `${startIndex + index + 1}: ${userData.name}: ${userData.exp} messages\n`;
    });

    msg += `\nPage: ${page}/${numPages}`;
    return api.sendMessage(msg, threadID, messageID);
  } else if (mentions[0]) {
    const mentionedID = mentions[0].id;
    const expData = threadData ? threadData.data : [];
    const userData = expData.find(item => item.id === mentionedID);

    if (userData) {
      const count = expData.reduce((sum, item) => sum + item.exp, 0);
      const rank = expData.findIndex(item => item.id === mentionedID);
      const interactionRate = ((userData.exp / count) * 100).toFixed(0);

      const profilePicUrl = `https://graph.facebook.com/${mentionedID}/picture?width=800&height=800`;
      const { data: imageBuffer } = await axios.get(profilePicUrl, { responseType: 'arraybuffer' });
      const attachmentData = {
        body: `Name: ${userData.name}\nRank: ${rank + 1}\nNumber of messages: ${userData.exp}\nInteraction rate: ${interactionRate}%`,
        attachment: imageBuffer
      };

      return api.sendMessage(attachmentData, threadID, messageID);
    }
  }
};