module.exports.config = {
	name: "help",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Badol", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/YXFfZfD.jpg",
            "https://i.imgur.com/zHAmF70.jpg",
            "https://i.imgur.com/CwAiFqt.jpg",
            "https://i.imgur.com/Tu0omOL.jpg",
            
"https://i.imgur.com/YXFfZfD.jpg"];var callback = () => api.sendMessage({body:`🌺𝐁4𝐃9𝐋☘️𝐕41🍀𝐁𝐎𝐓-007🌺 

╭────────╮
🌿👉𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧👈🌿
╰────────╯
🌺☘️▬▬▬▬▬▬▬▬▬▬▬▬☘️🌺
   🌺1 ➥ art☘️
   ☘️2 ➥ bdsex🌺
    🌿3 ➥ bossbg🍁
   🌺4 ➥ giftfile☘️
   ☘️5 ➥ i43🌺
   🌺6 ➥ i431☘️
   ☘️7 ➥ i432🌺
   🌺8 ➥ info☘️
   ☘️9 ➥ jummah🌺
   🌺10 ➥ owner☘️
   ☘️11 ➥ pom pom🌺
   🌺12 ➥ reply☘️
   ☘️13 ➥ saniapu🌺
   🌺14 ➥ sms☘️
   ☘️15 ➥ vippic🌺
   🌺16 ➥ love☘️
   ☘️17 ➥ video🌺
   🌺18 ➥ acp☘️
   ☘️19 ➥ adbot🌺
   🌺20 ➥ add☘️
   ☘️21 ➥ inf🌺
   🌺22 ➥ admin☘️
   ☘️23 ➥ 18🌺
   🌺24 ➥ antiout☘️
   ☘️25 ➥ artdp🌺
   🌺26 ➥ artdpv2☘️
   ☘️27 ➥ attitude🌺
   🌺28 ➥ autoseen☘️
   ☘️29 ➥ autotime🌺
   🌺30 ➥ bans☘️
   ☘️31 ➥ bigtext🌺
   🌺32 ➥ cardbox☘️
   ☘️33 ➥ cardinfov3🌺
   🌺34 ➥ catsay☘️
   ☘️35 ➥ chart🌺
   🌺36 ➥ badolmim☘️
   ☘️37 ➥ config🌺
   🌺38 ➥ console☘️
   ☘️39 ➥ fbcover🌺
   🌺40 ➥ daily☘️
   ☘️41 ➥ dogfact🌺
   🌺42 ➥ fact☘️
   ☘️43 ➥ fbcoverv3🌺
   🌺44 ➥ fbcoverv2☘️
   ☘️45 ➥ fuck🌺
   🌺46 ➥ fuckv5☘️
   ☘️47 ➥ fuckv2🌺
   🌺48 ➥ fuckv3☘️
   ☘️49 ➥ fuckv4🌺
   🌺50 ➥ goibot☘️
   ☘️51 ➥ gojol🌺
   🌺52 ➥ gupemoji☘️
   ☘️53 ➥ guppp🌺
   🌺54 ➥ gupname☘️
   ☘️55 ➥ hack🌺
   🌺56 ➥ help2☘️
   ☘️57 ➥ hot2🌺
   🌺58 ➥ hot1☘️
   ☘️59 ➥ hot🌺
   🌺60 ➥ hug☘️
   ☘️61 ➥ idea@🌺
   🌺62 ➥ idea2☘️
   ☘️63 ➥ mcs🌺

   🌺64 ➥ imgur☘️
   ☘️65 ➥ infobox🌺
   🌺66 ➥ install☘️
   ☘️67 ➥ jonny🌺
   🌺68 ➥ kick☘️
   ☘️69 ➥ kiss🌺
   🌺70 ➥ kissv2☘️
   ☘️71 ➥ leni🌺
   🌺72 ➥ leon☘️
   ☘️73 ➥ lexi🌺
   🌺74 ➥ logo10☘️
   ☘️75 ➥ logo11🌺
   🌺76 ➥ logo12☘️
   ☘️77 ➥ logo13🌺
   🌺78 ➥ logo14☘️
   ☘️79 ➥ logo15🌺
   🌺80 ➥ logo16☘️
   ☘️81 ➥ logo17🌺
   🌺82 ➥ logo18☘️
   ☘️83 ➥ logo19🌺
   🌺84 ➥ logo20☘️
   ☘️85 ➥ logo9🌺
   🌺86 ➥ badol☘️
   ☘️87 ➥ lovebadol🌺
   🌺88 ➥ Nagin☘️
   ☘️89 ➥ magi🌺
   🌺90 ➥ mark☘️
   ☘️91 ➥ married🌺
   🌺92 ➥ marry☘️
   ☘️93 ➥ math🌺
   🌺94 ➥ mathematics☘️
   ☘️95 ➥ meme🌺
   🌺96 ➥ mia☘️
   ☘️97 ➥ money🌺
   🌺98 ➥ power@☘️
   ☘️99 ➥ murgi@🌺
   🌺100 ➥ music☘️
   ☘️101 ➥ hotyd🌺
   🌺102 ➥ nunu☘️
   ☘️103 ➥ obama🌺
   🌺104 ➥ left☘️
   ☘️105 ➥ outa🌺
   🌺106 ➥ pair☘️
   ☘️107 ➥ pom🌺
   🌺108 ➥ porn☘️
   ☘️109 ➥ prefix🌺
   🌺110 ➥ qr☘️
   ☘️111 ➥ rank🌺
   🌺112 ➥ rankup☘️
   ☘️113 ➥ refresh🌺
   🌺114 ➥ restart☘️
   ☘️115 ➥ rules🌺
   🌺116 ➥ sadvideo☘️
   ☘️117 ➥ sadvideov2🌺
   🌺118 ➥ say☘️
   ☘️119 ➥ search🌺
   🌺120 ➥ sendnotiv2☘️
   ☘️121 ➥ new🌺
   🌺122 ➥ setimg☘️
   ☘️123 ➥ setname🌺
   🌺124 ➥ setprefix☘️
   ☘️125 ➥ sistem🌺
   🌺126 ➥ sim☘️
   ☘️127 ➥ song🌺
   🌺128 ➥ singgele☘️
   ☘️129 ➥ speedtest🌺
   🌺130 ➥ tagadmin☘️
   ☘️131 ➥ tik🌺
   🌺132 ➥ toilet☘️
   ☘️133 ➥ arabi🌺
   🌺134 ➥ english☘️
   ☘️135 ➥ hindi🌺
   🌺136 ➥ bangla☘️
   ☘️137 ➥ korean🌺
   🌺138 ➥ uid☘️
   ☘️139 ➥ unban🌺
   🌺140 ➥ remove☘️
   ☘️141 ➥ uptime🌺
   🌺142 ➥ ytsearch☘️
   ☘️143 ➥ zuck🌺
🌺▬▬▬▬▬▬▬▬▬▬▬▬☘️
╭──────╮
🌺 𝐏𝐀𝐆𝐄   (1/1)☘️
╰──────╯
𝗧𝘆𝗽𝗲: °.𝗛𝗲𝗹𝗽2°
𝗧𝗼𝘁𝗮𝗹 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀: 𝐥𝐢𝐬𝐭 
🌺▬▬▬▬▬▬▬▬▬▬▬▬☘️
╭────────────╮
🍁☘️𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑🍁☘️
╰────────────╯  
╭──────────────────╮
🌺 𝐁𝐀𝐃𝐎𝐋-𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘☘️
╰──────────────────╯
☘️▬▬▬▬▬▬▬▬▬▬▬▬🍁 

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤https://www.facebook.com/BADOL.CHOWDHURY.TERA.REAL.ABBU

𖣘CHAT'LINK👇:
m.me/100004504180813
☘️▬▬▬▬▬▬▬▬▬▬▬▬🌺 

╭────────────╮
🌺 𝗙𝗢𝗥 𝗛𝗔𝗧𝗘𝗥𝗦 ☘️
╰────────────╯ 
      𝗙𝗘𝗘𝗟 𝗧𝗛𝗘 𝗣𝗢𝗪𝗘𝗥 𝗢𝗙  🄱🄰🄳🄾🄻 🄲🄷🄾🅆🄳🄷🅄🅁🅈
🍁▬▬▬▬▬▬▬▬▬▬▬▬☘️
┎──────────────────┑
🏵️ 🅱︎🅰︎🅳︎🅾︎🅻︎ 🅲︎🅷︎🅾︎🆆︎🅳︎🅷︎🆄︎🆁︎🆈︎ 🏵️
┗──────────────────┙
🌺▬▬▬▬▬▬▬▬▬▬▬▬☘️`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };