"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();
module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants,
) => {
  try {
    const server = await BloomBot.nsfwCheck.findOne({ serverId: chatkey.chat });
    if (!server) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: { text: "❌", key: chatkey.key },
      });
      return chatkey.reply(`*😥 Apologies:* _${
        BloomBot.pushname || BloomBot.tagname
      }_

*❌Error:*
> NSFW commands have been disabled for this group.
> You can ask the administrators to enable them.`);
    }

    const response = await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/nsfw?q=${currFile}`,
    );
    const mgdata = response.data;
    if (!mgdata.meta.thumbnail) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: { text: "❌", key: chatkey.key },
      });
      return chatkey.reply(`*😥 Apologies:* _${BloomBot.pushname}_

*❌Error:* There has been an API Error. Please try again later.`);
    }

    const message = `
*🌻 Here is ${currFile} for @${BloomBot.tagname || BloomBot.pushname}:*

┌╔═☰ *❗ ADULT CONTENT ❗*
║⦁ 💡 Title: ${mgdata.meta.title || "Not available"}
║⦁ 🖊️ Author: ${mgdata.meta.author || "Not available"}
║⦁ ❣️ Topic: ${mgdata.meta.topic || "Not available"}
╚══☰
┌╔═☰
║>  *❓ META INFO ❓*
║⦁ 🎊 Status: ${mgdata.meta.status || "Not available"}
║⦁ 🔐 UUId: ${mgdata.meta.uuid || "Not available"}
║⦁ 🗓️ Date Created: ${mgdata.meta.date_create || "Not available"}
║⦁ 🧀 Query: ${mgdata.meta.query || "Not available"}
║⦁ 📢 Domain: ${mgdata.meta.domain || "Not available"}
║⦁ 💯 Subreddit Id: ${mgdata.meta.sub_reddit_id || "Not available"}
║⦁ 🌐 Link: ${mgdata.meta.web_link || "Not available"}
╚═══════⋑`;
    await BloomBot.imagebutton(BloomBot, chatkey, message, mgdata.meta.thumbnail);
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
