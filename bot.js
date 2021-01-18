const Discord = require('discord.js');
const fs = require('fs');
const http = require('http'); // For WolfStats
const url = require('url'); // For WolfStats
const del = require('del'); // For deleting Nyropedia articles
const randomPuppy = require('random-puppy');

const embeds = require('./we.js');

const client = new Discord.Client();

const config = JSON.parse(fs.readFileSync('config.json'));
const help = JSON.parse(fs.readFileSync('help.json'));
const swear = JSON.parse(fs.readFileSync('swear.json'));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} with prefix ${config.prefix}`);

    
    client.channels.cache.get('757190014382768138').messages.fetch('800356964764745748');

    client.channels.cache.get('800347392721158165').messages.fetch('800356033053851708');
    client.channels.cache.get('800347392721158165').messages.fetch('800356069209669632');
    client.channels.cache.get('800347392721158165').messages.fetch('800356081947508756');
    client.channels.cache.get('800347392721158165').messages.fetch('800356099688890378');
    client.channels.cache.get('800347392721158165').messages.fetch('800356140386222120');
    client.channels.cache.get('800347392721158165').messages.fetch('800356157830987869');
    client.channels.cache.get('800347392721158165').messages.fetch('800356181176221757');
    client.channels.cache.get('800347392721158165').messages.fetch('800356204781633597');
    client.channels.cache.get('800347392721158165').messages.fetch('800356227979804722');
    client.channels.cache.get('800347392721158165').messages.fetch('800356342660857866');
    client.channels.cache.get('800347392721158165').messages.fetch('800356359371489300');
    client.channels.cache.get('800347392721158165').messages.fetch('800356370129223712');
    client.channels.cache.get('800347392721158165').messages.fetch('800356382955667526');
    client.channels.cache.get('800347392721158165').messages.fetch('800356398071939112');
    client.channels.cache.get('800347392721158165').messages.fetch('800356411493449738');
    client.channels.cache.get('800347392721158165').messages.fetch('800356423652605952');

    client.on('messageReactionAdd', async (reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch();

        if (reaction.message.id === '800356964764745748') {
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800339502740013057':
                    member.roles.add('799365619585646642');
                break;
                
                case '800339503067168789':
                    member.roles.add('799365796530749470');
                break;
            }
        } else if(reaction.message.id === '800356033053851708') { // Black
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800348717337018368');
                break;
            }
        } else if(reaction.message.id === '800356069209669632') { // Yellow
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800349524807647272');
                break;
            }
        } else if(reaction.message.id === '800356081947508756') { // Cornflower
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800349982938497024');
                break;
            }
        } else if(reaction.message.id === '800356099688890378') { // Navy
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800348508682321930');
                break;
            }
        } else if(reaction.message.id === '800356140386222120') { // Blue
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800348943862333462');
                break;
            }
        } else if(reaction.message.id === '800356157830987869') { // Green
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800349630197923890');
                break;
            }
        } else if(reaction.message.id === '800356181176221757') { // Deep Blue
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800350153390948373');
                break;
            }
        } else if(reaction.message.id === '800356204781633597') { // Juicy Red
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800349013509275688');
                break;
            }
        } else if(reaction.message.id === '800356227979804722') { // Orange
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800349703492599818');
                break;
            }
        } else if(reaction.message.id === '800356342660857866') { // Hot Pink
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800349989263638539');
                break;
            }
        } else if(reaction.message.id === '800356359371489300') { // Lime
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800349592527831090');
                break;
            }
        } else if(reaction.message.id === '800356370129223712') { // Sand Dollar
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800349907507740682');
                break;
            }
        } else if(reaction.message.id === '800356382955667526') { // Blurple
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800348244810137610');
                break;
            }
        } else if(reaction.message.id === '800356398071939112') { // Teal
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800349467693940826');
                break;
            }
        } else if(reaction.message.id === '800356411493449738') { // Fuchsia
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800349406481874974');
                break;
            }
        } else if(reaction.message.id === '800356423652605952') { // Maroon
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.add('800349667916513290');
                break;
            }
        }
    });

    client.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();

        if (reaction.message.id === '800064383220187157') {
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800339502740013057':
                    member.roles.remove('799365619585646642');
                break;

                case '800339503067168789':
                    member.roles.remove('799365796530749470');
                break;
            }
        } else if(reaction.message.id === '800356033053851708') { // Black
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800348717337018368');
                break;
            }
        } else if(reaction.message.id === '800356069209669632') { // Yellow
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800349524807647272');
                break;
            }
        } else if(reaction.message.id === '800356081947508756') { // Cornflower
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800349982938497024');
                break;
            }
        } else if(reaction.message.id === '800356099688890378') { // Navy
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800348508682321930');
                break;
            }
        } else if(reaction.message.id === '800356140386222120') { // Blue
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800348943862333462');
                break;
            }
        } else if(reaction.message.id === '800356157830987869') { // Green
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800349630197923890');
                break;
            }
        } else if(reaction.message.id === '800356181176221757') { // Deep Blue
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800350153390948373');
                break;
            }
        } else if(reaction.message.id === '800356204781633597') { // Juicy Red
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800349013509275688');
                break;
            }
        } else if(reaction.message.id === '800356227979804722') { // Orange
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800349703492599818');
                break;
            }
        } else if(reaction.message.id === '800356342660857866') { // Hot Pink
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800349989263638539');
                break;
            }
        } else if(reaction.message.id === '800356359371489300') { // Lime
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800349592527831090');
                break;
            }
        } else if(reaction.message.id === '800356370129223712') { // Sand Dollar
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800349907507740682');
                break;
            }
        } else if(reaction.message.id === '800356382955667526') { // Blurple
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800348244810137610');
                break;
            }
        } else if(reaction.message.id === '800356398071939112') { // Teal
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800349467693940826');
                break;
            }
        } else if(reaction.message.id === '800356411493449738') { // Fuchsia
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800349406481874974');
                break;
            }
        } else if(reaction.message.id === '800356423652605952') { // Maroon
            const member = await reaction.message.guild.members.fetch(user.id);

            switch (reaction.emoji.id) {
                case '800033555245301781':
                    member.roles.remove('800349667916513290');
                break;
            }
        }
    });
});

/*
##############
#RichPresence#
##############
*/

let statuses = [
    'Official LoungeBot-News',
    'News - Trump is an big idiot.',
    'News - Wear a mask!',
    'News - Karens are not allowed on this Discord.',
    '!wearamask',
    '!help'
]
setInterval(function() {
    // Define random chooses
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    // Set RPC
    client.user.setActivity(status, {
        type: "PLAYING"
    });
}, 7500);

/*
##############
#Command-List#
##############
*/

// User-Command-List

var cmdmap_user = {
    // Moderating

    kick: cmd_kick,
    ban: cmd_ban,
    clear: cmd_clear,
    announce: cmd_announce,


    // USER

    // Informations
    botinfo: cmd_botinfo,
    changelog: cmd_changelog,
    status: cmd_status,
    credits: cmd_credits,
    partner: cmd_partner,
    ui: cmd_ui,
    si: cmd_si,
    wearamask: cmd_wearamask,

    // Fun

    cf: cmd_cflip,
    yon: cmd_yon,
    /*supreme: cmd_supreme,
    scroll: cmd_scroll,
    facts: cmd_facts,
    captcha: cmd_captcha,
    calling: cmd_calling,
    achievement: cmd_achievement,*/
    avatar: cmd_avatar,
    meme: cmd_meme,
    wallpaper: cmd_wallpaper,
    surprise: cmd_suprise,

    // Roleplay

    hug: cmd_hug,
    kiss: cmd_kiss,
    slap: cmd_slap,

    // Nyropedia

    nps: cmd_nps,
    npa: cmd_npa,
    npd: cmd_npd,
    npe: cmd_npe,
    npr: cmd_npr,
    npl: cmd_npl,

    // Help

    help: cmd_help,
    moderation: cmd_moderation,
    i: cmd_i,
    fun: cmd_fun,
    rp: cmd_rp,
    np: cmd_np,
}

var cmdmap_dev = {
    bl: cmd_bl,
    eval: cmd_eval,
}

/*
##########
#Commands#
##########
*/

// Template

/*function foo(msg // msg for messages stuff, args // args for arguments after the command (you cann use [number] for specific arguments like the first ([0]) or second ([1]). !IMPORTANT! The first argument is always [0])) {
  
  // Embeds from WolfEmbed

  // Green/Success embed
  embeds.succ(msg.channel, Description/Text, Title, Thumbnail);
    
  // Red/Error embed
  embeds.err(msg.channel, Description/Text, Title, Thumbnail);

  // Blue/Info embed
  embeds.info(msg.channel, Description/Text, Title, Thumbnail);

  // Orange/Important embed
  embeds.imp(msg.channel, Description/Text, Title, Thumbnail);

  // If you want to print arguments in chat or console and want to space them, then use args.join(' ') (console.log(args.join(' ')) = Hello this is a test). Otherwise you will get "Hello,this,is,a,test".

  // Normal chat messages
  msg.channel.send(String);

  // DM message author
  msg.author.reply(String);

}*/

// Command-Methods

// Mod-Commands

function cmd_kick(msg, args) {
    const c = client.emojis.cache.get('799943412589395969'); // Checkmark emoji

    const user = msg.guild.member(msg.author);
    let member = msg.mentions.members.first();

    args[0] = '';

    if(user.hasPermission("KICK_MEMBERS")) {
        if(msg.guild.me.hasPermission("KICK_MEMBERS")) {
            if(member != undefined) {
                if(member.id != client.user.id) {
                    if(member.id != msg.author.id) {
                        if(member.kickable) {
                            member.kick();
            
                            var emb = new Discord.MessageEmbed()
                                .setColor(0xf1c40f)
                                .setDescription(`You got kicked from ${msg.guild.name} for ${args.join(' ')}.`)
                                .setFooter(`${config.botname} - by zWolfy`)
                                .setTimestamp()
            
                            client.users.cache.get(member.id).send(emb).catch(error => {
                                embeds.err(msg.channel, '**You may ignore this.**\nCould not send a DM to the kicked user.', '» ERROR 500');
                            });
            
                            embeds.succ(msg.channel, `${c} Successfully kicked user ${member} for ${args.join(' ')}`, '» Kick');
                        } else if(!member.kickable) {
                            embeds.err(msg.channel, 'I am not allowed to kick people above or with the same roles/permissions as mine.', '» ERROR 403');
                        }
                    } else {
                        embeds.err(msg.channel, 'Are you trying to kick yourself?', '» ERROR 403');
                    }
                } else {
                    embeds.err(msg.channel, 'Are you trying to kick me?', '» ERROR 403');
                }
            } else {
                embeds.err(msg.channel, 'This user does not exist.', '» ERROR 404')
            }
        } else {
            embeds.err(msg.channel, 'I am not allowed to kick other users. (I need `KICK_MEMBERS`)', '» ERROR 403');
        }
    } else {
        embeds.err(msg.channel, 'You are not allowed to kick other users. (You need `KICK_MEMBERS`)', '» ERROR 403');
    }
}

function cmd_ban(msg, args) {
    const c = client.emojis.cache.get('799943412589395969'); // Checkmark emoji

    const user = msg.guild.member(msg.author);
    let member = msg.mentions.members.first();

    args[0] = '';

    if(user.hasPermission("BAN_MEMBERS")) {
        if(msg.guild.me.hasPermission("BAN_MEMBERS")) {
            if(member != undefined) {
                if(member.id != client.user.id) {
                    if(member.id != msg.author.id) {
                        if(member.bannable) {
                            member.ban();
            
                            var emb = new Discord.MessageEmbed()
                                .setColor(0xf1c40f)
                                .setDescription(`You got banned from ${msg.guild.name} for ${args.join(' ')}.`)
                                .setFooter(`${config.botname} - by zWolfy`)
                                .setTimestamp()
            
                            client.users.cache.get(member.id).send(emb).catch(error => {
                                embeds.err(msg.channel, '**You may ignore this.**\nCould not send a DM to the banned user.', '» ERROR 500');
                            });
                            embeds.succ(msg.channel, `${c} Successfully banned user ${member} for ${args.join(' ')}`, '» Ban');
                        } else if(!member.bannable) {
                            embeds.err(msg.channel, 'I am not allowed to ban people above or with the same roles/permissions as mine.', '» ERROR 403 ');
                        }
                    } else {
                        embeds.err(msg.channel, 'Are you trying to ban yourself?', '» ERROR 403');
                    }
                } else {
                    embeds.err(msg.channel, 'Are you trying to ban me?', '» ERROR 403');
                }
            } else {
                embeds.err(msg.channel, 'This user does not exist.', '» ERROR 404')
            }
        } else {
            embeds.err(msg.channel, 'I am not allowed to kick other users. (I need `BAN_MEMBERS`)', '» ERROR 403 ');
        }
    } else {
        embeds.err(msg.channel, 'You are not allowed to ban other users. (You need `BAN_MEMBERS`)', '» ERROR 403');
    }
}

function cmd_clear(msg, args) {
    if(msg.member.hasPermission('MANAGE_MESSAGES')) {
        let messagecount = parseInt(args[0]);
      
        if(isNaN(messagecount)) return embeds.err(msg.channel, 'Please mention the amount of messages you want to delete.', '» ERROR 400');
      
        if(messagecount > 99) {
            embeds.err(msg.channel, 'You can only delete 2 - 99 messages (+ your own) at one time.', '» ERROR 400');
        } else if(messagecount < 2 ) {
            embeds.err(msg.channel, 'You can only delete 2 - 99 messages (+ your own) at one time.', '» ERROR 400');
        } else {
            msg.channel.messages.fetch({limit: messagecount}).then(messages => msg.channel.bulkDelete(messages, true)).catch();
        }
    } else {
        embeds.err(msg.channel, 'You need `MANAGE_MESSAGES` to execute this command.', '» ERROR 403');
    }
}

function cmd_announce(msg, args) {
    var args_thumb = args[0];
    var args_banner = args[1];
    var args_title = args[2];

    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    if(msg.member.hasPermission('MENTION_EVERYONE')) {
        args[0] = '';
        args[1] = '';
        args[2] = '';

        if(validURL(args_thumb)) {
            if(validURL(args_banner)) {
                msg.delete();
                embeds.announce(msg.channel, args_thumb, args_banner, args_title, args.join(' '));
            } else {
                msg.delete();
                embeds.announce(msg.channel, args_thumb, '', args_title, args.join(' '));
            }
        } else {
            if(validURL(args_banner)) {
                msg.delete();
                embeds.announce(msg.channel, '', args_banner, args_title, args.join(' '));
            } else {
                msg.delete();
                embeds.announce(msg.channel, '', '', args_title, args.join(' '));
            }
        }
    } else {
        embeds.err(msg.channel, 'You don\'t have permissions to announce. (You need `MENTION_EVERYONE`)', '» ERROR 403');
    }
}

// User-Commands

function cmd_botinfo(msg) {
    let uname = client.user.username;
    let discrim = client.user.discriminator;
    let id = client.user.id;
    let tag = client.user.tag;

    let createdat = client.user.createdAt;

    embeds.info(msg.channel, `__**Name**__: ${uname}\n__**Discriminator**__: ${discrim}\n__**Bot-ID**__: ${id}\n__**Bot Tag**__: ${tag}\n__**Created at**__: ${createdat}\n__**Server Count**__: ${client.guilds.cache.size}\n__**User Count**__: ${client.users.cache.size - 1}\n__**Bot Version**__: ${config.version}\n__**NodeJS Version**__: ${process.version}\n__**DiscordJS Version**__ ${Discord.version}`, '» Bot-Info', client.user.avatarURL(), 'https://i.imgur.com/I8TnjMe.png');
}

function cmd_credits(msg) {
    embeds.info(msg.channel, 'API for the *custom* image commands: [AlexFlipNote](https://alexflipnote.dev/)\n\n**lyxt** and **CrazyS1** for help with some questions around DiscordJS and NodeJS.', '» Credits');
}

function cmd_changelog(msg) {
    const pl = client.emojis.cache.get('799948294267994112'); // Plus emoji
    const mi = client.emojis.cache.get('799948294343360552'); // Minus emoji
    const e = client.emojis.cache.get('799948295740063744'); // Warning/Edit emoji

    embeds.info(msg.channel, `**${config.version}**:\n\n${e} Initial Release.`, '» Changelog');
}


function cmd_status(msg) {
    const o = client.emojis.cache.get('799638208547258439'); // Outtake emoji

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    function getCondition() {
        let ping = Math.round(client.ws.ping);

        if(ping < 151) {
            return 'GOOD';
        } else if(ping > 150 && ping < 201) {
            return 'OK';
        } else if(ping > 200 && ping < 276) {
            return 'BAD';
        } else if(ping > 275) {
            return `${o} Unstable connection detected, please contact zWolfy.`;
        }
    }

    let ping = `${Math.round(client.ws.ping)}ms`;
    embeds.info(msg.channel, `I am online since **${days} days**, **${hours} hours**, **${minutes} minutes** and **${seconds} seconds**.\n\nMy Host-Condition is \`${getCondition()}\` and I executed this embed in ${ping}.`, '» Status');
}

function cmd_partner(msg, args) {
    embeds.info(msg.channel, 'Sadly, I don\'t have any partners yet. \:(', '» Partners');
}

function cmd_ui(msg) {
    if(msg.mentions.users.first() != undefined) {
        let uname = msg.mentions.users.first().username;
        let discrim = msg.mentions.users.first().discriminator;
        let id = msg.mentions.users.first().id;
        let tag = msg.mentions.users.first().tag;

        let createdat = msg.mentions.users.first().createdAt;

        embeds.info(msg.channel, '__**Username**__: ' + uname + '\n__**Discriminator**__: ' + discrim + '\n__**Tag**__: ' + tag + '\n__**ID**__: ' + id + '\n\n__**Created at**__: ' + createdat, '» User-Info', msg.mentions.users.first().avatarURL({ format: 'png' }));
    } else {
        let uname = msg.author.username;
        let discrim = msg.author.discriminator;
        let id = msg.author.id;
        let tag = msg.author.tag;

        let createdat = msg.author.createdAt;

        embeds.info(msg.channel, '__**Username**__: ' + uname + '\n__**Discriminator**__: ' + discrim + '\n__**Tag**__: ' + tag + '\n__**ID**__: ' + id + '\n\n__**Created at**__: ' + createdat, '» User-Info', msg.author.avatarURL({ format: 'png' }));
    }
}

function cmd_si(msg) {
    let sname = msg.guild.name;
    let sid = msg.guild.id;
    let sowner = msg.guild.owner.user.tag;

    let svef = msg.guild.verificationLevel;
    let screatedat = msg.guild.createdAt;

    let smembers = msg.guild.memberCount;
    let sbots = msg.guild.members.cache.filter(member => member.user.bot == true).size;
    let srh = smembers - sbots;
    let srolec = msg.guild.roles.cache.size - 1;
    let sroles = msg.guild.roles.cache.map(r => r).join('\n').replace('@everyone', ' ');

    if(msg.guild.iconURL != null) {
        embeds.info(msg.channel, '__**Server name**__: ' + sname + '\n__**Server ID**__: ' + sid + '\n__**Server owner**__: ' + sowner + '\n\n__**Verification Level**__: ' + svef + '\n__**Created at**__: ' + screatedat + '\n\n__**Member count**__: ' + smembers + '\n__**Bots**__ ' + sbots + '\n__**Real humans**__: ' + srh + '\n__**Roles**__: [' + srolec + ']\n' + sroles, '» Server-Info', msg.guild.iconURL({ format: 'png' }));
    } else {
        embeds.info(msg.channel, '__**Server name**__: ' + sname + '\n__**Server ID**__: ' + sid + '\n__**Server owner**__: ' + sowner + '\n\n__**Verification Level**__: ' + svef + '\n__**Created at**__: ' + screatedat + '\n\n__**Member count**__: ' + smembers + '\n__**Bots**__ ' + sbots + '\n__**Real humans**__: ' + srh + '\n__**Roles**__: [' + srolec + ']\n' + sroles + '\n__**Server icon**__:\n\nThere\'s no icon.', '» Server-Info');
    }
}

function cmd_wearamask(msg) {
    const mask = client.emojis.cache.get('800033840482746368');

    embeds.announce(msg.channel, 'https://upload.wikimedia.org/wikipedia/commons/8/82/SARS-CoV-2_without_background.png', '', '» Covid-19 Information', `${mask} Hey you! You should wear a mask. We all know that it can be difficult to breathe under them, but it's important for your own and others health.\nCovid-19 isn't a joke or fake-news, it's a global pandemic and you shouldn't ignore this!\nI know, we're in a difficult time right now and we can make it all better while wearing masks (Don't forget to cover your mouth **and** nose!), doing social distancing, washing your hands and being nice to each other.\nIf you need social help you're welcome to ask server staffs via DM (especially zWolfy).\nYou can find more information [here](https://www.who.int/emergencies/diseases/novel-coronavirus-2019).\n\nStay at home!`);
}

function cmd_cflip(msg) {
    function onCoinFlip() {
        var cf = ['Heads', 'Tails'];

        return cf[Math.floor(Math.random() * cf.length)];
    }

    embeds.info(msg.channel, `You got: ${onCoinFlip()}`, '» Coin-Flip');
}

function cmd_yon(msg) {
    function onYON() {
        var yon = ['Yes', 'No'];

        return yon[Math.floor(Math.random() * yon.length)];
    }
    embeds.info(msg.channel, `Baba Wanga says: __**${onYON()}**__`, '» Yes or No');
}

/*function cmd_random(msg, args) {

    var x = Number(args[0]);
    var y = Number(args[1]);

    if(x > (Number.MIN_SAFE_INTEGER - 1) && x < (Number.MAX_SAFE_INTEGER) + 1) {
        if(Math.sign(x) != -1 || Math.sign(x) == 0) {
            embeds.info(msg.channel, Math.floor(Math.random() * y) + x, '» Random number');
        } else {
            embeds.info(msg.channel, Math.floor(Math.random() * y) - x, '» Random number');
        }
    } else {
        embeds.err(msg.channel, 'Either you gave a string instead of an integer or you reached the `MIN_SAFE_INTEGER` / `MAX_SAFE_INTEGER`', '» ERROR 400');
    }
}

function cmd_supreme(msg, args) {
    link = 'https://api.alexflipnote.dev/supreme?text=' + args;
    
    if(link === 'https://api.alexflipnote.dev/supreme?text=') {
        embeds.err(msg.channel, 'Can\'t use text with zero content.', '» ERROR 400');
    } else {
        embeds.info(msg.channel, '', '» Custom Supreme Logo', 'https://api.alexflipnote.dev/supreme?text=' + args.join('+'));
    }
}

function cmd_scroll(msg, args) {
    link = 'https://api.alexflipnote.dev/scroll?text=' + args;

    if(link === 'https://api.alexflipnote.dev/scroll?text=') {
        embeds.err(msg.channel, 'Can\'t use text with zero content.', '» ERROR 400');
    } else {
        embeds.info(msg.channel, '', '» Custom Scroll Meme', 'https://api.alexflipnote.dev/scroll?text=' + args.join('+'));
    }
}

function cmd_facts(msg, args) {
    link = 'https://api.alexflipnote.dev/facts?text=' + args;

    if(link === 'https://api.alexflipnote.dev/facts?text=') {
        embeds.err(msg.channel, 'Can\'t use text with zero content.', '» ERROR 400');
    } else {
        embeds.info(msg.channel, '', '» Custom Facts Meme', 'https://api.alexflipnote.dev/facts?text=' + args.join('+'));
    }
}

function cmd_captcha(msg, args) {
    link = 'https://api.alexflipnote.dev/captcha?text=' + args;

    if(link === 'https://api.alexflipnote.dev/captcha?text=') {
        embeds.err(msg.channel, 'Can\'t use text with zero content.', '» ERROR 400');
    } else {
        embeds.info(msg.channel, '', '» Custom Captcha', 'https://api.alexflipnote.dev/captcha?text=' + args.join('+'));
    }
}

function cmd_calling(msg, args) {
    link = 'https://api.alexflipnote.dev/calling?text=' + args;

    if(link === 'https://api.alexflipnote.dev/calling?text=') {
        embeds.err(msg.channel, 'Can\'t use text with zero content.', '» ERROR 400');
    } else {
        embeds.info(msg.channel, '', '» Custom Calling Meme', 'https://api.alexflipnote.dev/calling?text=' + args.join('+'));
    }
}

function cmd_achievement(msg, args) {
    link = 'https://api.alexflipnote.dev/achievement?text=' + args;

    if(link === 'https://api.alexflipnote.dev/achievement?text=') {
        embeds.err(msg.channel, 'Can\'t use text with zero content.', '» ERROR 400');
    } else {
        embeds.info(msg.channel, '', '» Custom Achievement', 'https://api.alexflipnote.dev/achievement?text=' + args.join('+'));
    }
}*/

function cmd_avatar(msg) {
    if(msg.guild.member(args)) {
        embeds.info(msg.channel, '', '» Avatar', '', msg.guild.member(args).avatarURL());
    } else if(msg.mentions.users.first() != undefined) {
        embeds.info(msg.channel, '', '» Avatar', msg.mentions.users.first().avatarURL());
    } else {
        embeds.info(msg.channel, '', '» Avatar', msg.author.avatarURL());
    }
}

function cmd_meme(msg) {
    let reddit = [
        "meme",
        "MemesOfAnime",
        "dankmemes",
        "dankmeme",
        "wholesomememes",
        "MemeEconomy",
        "meirl",
        "me_irl",
        "2meirl4meirl",
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    randomPuppy(subreddit).then(async url => {
        embeds.info(msg.channel, '', '» Meme', '', url)
    }).catch(err => console.error(err));
}

function cmd_wallpaper(msg) {
    let reddit = [
        "wallpapers",
        "wallpaper",
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    randomPuppy(subreddit).then(async url => {
        embeds.info(msg.channel, '', '» Wallpaper', '', url)
    }).catch(err => console.error(err));
}

function cmd_suprise(msg) {
    msg.channel.send('Don\'t play this twice!', { files: ["./i like ya cut g.ogg"] });
}

// Roleplay

function cmd_hug(msg, args) {
    const img_hugs = JSON.parse(fs.readFileSync('hugs.json'));
    var keys = Object.keys(img_hugs);

    if(msg.mentions.users.first() === undefined) {
        if(args === '' || args === undefined || args === null) {
            embeds.err(msg.channel, 'Can\'t use arguments starting with space or contains nothing.', '» ERROR 400');
        } else {
            embeds.info(msg.channel, '<@' + msg.author.id + '> hugged ' + args.join(' '), '» Hug', '', img_hugs[keys[Math.floor(Math.random() * keys.length)]]);
        }
    } else {
        embeds.info(msg.channel, `<@${msg.author.id}> hugged ${msg.mentions.users.first()}.`, '» Hug', '', img_hugs[keys[Math.floor(Math.random() * keys.length)]]);
    }
}

function cmd_kiss(msg, args) {
    const img_kiss = JSON.parse(fs.readFileSync('kisses.json'));
    var keys = Object.keys(img_kiss);

    if(msg.mentions.users.first() === undefined) {
        if(args === '' || args === undefined || args === null) {
            embeds.err(msg.channel, 'Can\'t use arguments starting with space or contains nothing.', '» ERROR 400');
        } else {
            embeds.info(msg.channel, '<@' + msg.author.id + '> kissed ' + args.join(' '), '» Kiss', '', img_kiss[keys[Math.floor(Math.random() * keys.length)]]);
        }
    } else {
        embeds.info(msg.channel, `<@${msg.author.id}> kissed ${msg.mentions.users.first()}.`, '» Kiss', '', img_kiss[keys[Math.floor(Math.random() * keys.length)]]);
    }
}

function cmd_slap(msg, args) {
    const img_slap = JSON.parse(fs.readFileSync('slaps.json'));
    var keys = Object.keys(img_slap);

    if(msg.mentions.users.first() === undefined) {
        if(args === '' || args === undefined || args === null) {
            embeds.err(msg.channel, 'Can\'t use arguments starting with space or contains nothing.', '» ERROR 400');
        } else {
            embeds.info(msg.channel, '<@' + msg.author.id + '> slapped ' + args.join(' '), '» Slap', '', img_slap[keys[Math.floor(Math.random() * keys.length)]]);
        }
    } else {
        embeds.info(msg.channel, `<@${msg.author.id}> slapped ${msg.mentions.users.first()}.`, '» Slap', '', img_slap[keys[Math.floor(Math.random() * keys.length)]]);
    }
}

// Nyropedia

function cmd_nps(msg, args) {
    if(fs.existsSync('Nyropedia/Articles/' + args[0] + '/' + 'article.txt')) {
        let article = fs.readFileSync('Nyropedia/Articles/' + args[0] + '/' + 'article.txt');
        let author = fs.readFileSync('Nyropedia/Articles/' + args[0] + '/' + 'author.txt');
        let uid = fs.readFileSync('Nyropedia/Articles/' + args[0] + '/' + 'uid.txt');

        embeds.info(msg.channel, article + '\n\n' + 'by ' + author + ' (' + uid + ')', '» Nyropedia - Article: ' + args[0]);
    } else {
        embeds.err(msg.channel, 'Article not found.', '» ERROR 404');
    }
}

function cmd_npl(msg) {
    function getDirectories(path) {
        return fs.readdirSync(path).filter(function(file) {
            return fs.statSync(path + '/' + file).isDirectory();
        });
    }

    msg.author.send(getDirectories('Nyropedia/Articles/'))
        .catch((error) => {
            embeds.err(msg.channel, 'You have to open your DMs.', 'ERROR 403 ');
        });
}


function cmd_npa(msg, args) {

    function isBlacklisted() {
        if(fs.existsSync('Nyropedia/Blacklist/' + msg.author.id + '.txt')) {
            return 1;
        } else {
            return 0;
        }
    }

    function getArticlesCount() {
        if(fs.existsSync('Nyropedia/UAC/' + msg.author.id + '.txt')) {
            let count = fs.readFileSync('Nyropedia/UAC/' + msg.author.id + '.txt');
            return count;
        }
    }

    function setArticlesCount() {
        if(fs.existsSync('Nyropedia/UAC/' + msg.author.id + '.txt')) {
            let count = fs.readFileSync('Nyropedia/UAC/' + msg.author.id + '.txt');

            if(count == 1) {
                fs.writeFileSync('Nyropedia/UAC/' + msg.author.id + '.txt', '2');
            } else if(count == 2) {
                fs.writeFileSync('Nyropedia/UAC/' + msg.author.id + '.txt', '3');
            } else if(count == 3) {
                fs.writeFileSync('Nyropedia/UAC/' + msg.author.id + '.txt', '4');
            } else if(count == 4) {
                fs.writeFileSync('Nyropedia/UAC/' + msg.author.id + '.txt', '5');
            }
        } else {
            fs.writeFile('Nyropedia/UAC/' + msg.author.id + '.txt', '1', (err) => {
                if(err) {
                    console.log(err);
                }
            });
        }
    }

    const c = client.emojis.cache.get('799943412589395969'); // Checkmark emoji

    if(isBlacklisted() == 0) {
        if(args[0] != undefined || args[0] != null || args[0] != '' || !args[0].startsWith(' ') || args[0] != ' ') {
            if(args[1] != undefined) {
                if(!fs.existsSync('Nyropedia/Articles/' + args[0].replace('/', '').replace('\\', '') + '/')) {
                    fs.mkdirSync('Nyropedia/Articles/' + args[0].replace('/', '').replace('\\', '') + '/');
                    let fn = args[0].replace('/', '').replace('\\', '');
                    args[0] = '';
                    if(getArticlesCount() != 5) {
                            fs.writeFile('Nyropedia/Articles/' + fn + '/article.txt', args.join(' '), (err) => {
                                if(!err) {
                                    fs.writeFile('Nyropedia/Articles/' + fn + '/author.txt', msg.author.tag, (err) => {
                                        if(!err) {
                                            fs.writeFile('Nyropedia/Articles/' + fn + '/uid.txt', msg.author.id, (err) => {
                                                if(!err) {
                                                    embeds.succ(msg.channel, `${c} Successfully created article ${fn}.`, '» Nyropedia - Create article');
                                                    setArticlesCount();
                                                } else {
                                                    console.log(err);
                                                    embeds.err(msg.channel, 'Oops! An internal error occured while creating article ' + fn + '.', '» ERROR ???');
                                                }
                                            });
                                        } else {
                                            console.log(err);
                                        }
                                    });
                                } else {
                                    console.log(err);
                                }
                            });
                    } else {
                        embeds.err(msg.channel, 'I\'m sorry, but it seems like that you created already 5 articles.', '» ERROR 403');
                    }
                } else {
                    embeds.err(msg.channel, 'This article already exists.', '» ERROR 400');
                }
            } else {
                embeds.err(msg.channel, 'Article content/text can\'t be nothing/start with an space.', '» ERROR 400');
            }
        } else {
            embeds.err(msg.channel, 'Article name can\'t be nothing/only a space.', '» ERROR 400');
        }
    } else {
        embeds.err(msg.channel, 'I\'m sorry, but it seems like your account is completely blacklisted from creating/deleting/editing articles.', '» ERROR 403');
    }
}

function cmd_npd(msg, args) {

    function isBlacklisted() {
        if(fs.existsSync('Nyropedia/Blacklist/' + msg.author.id + '.txt')) {
            return 1;
        } else {
            return 0;
        }
    }

    function reduceArticlesCount() {
        let count = fs.readFileSync('Nyropedia/UAC/' + msg.author.id + '.txt');

        if(count == 1) {
            fs.writeFileSync('Nyropedia/UAC/' + msg.author.id + '.txt', '0');
        } else if(count == 2) {
            fs.writeFileSync('Nyropedia/UAC/' + msg.author.id + '.txt', '1');
        } else if(count == 3) {
            fs.writeFileSync('Nyropedia/UAC/' + msg.author.id + '.txt', '2');
        } else if(count == 4) {
            fs.writeFileSync('Nyropedia/UAC/' + msg.author.id + '.txt', '3');
        } else if(count == 5) {
            fs.writeFileSync('Nyropedia/UAC/' + msg.author.id + '.txt', '4');
        }
    }

    const c = client.emojis.cache.get('799943412589395969'); // Checkmark emoji

    if(fs.existsSync('Nyropedia/Articles/' + args[0] + '/')) {
        if(fs.existsSync('Nyropedia/Articles/' + args[0] + '/article.txt') && fs.existsSync('Nyropedia/Articles/' + args[0] + '/uid.txt') && fs.existsSync('Nyropedia/Articles/' + args[0] + '/author.txt')) {
            var uid = fs.readFileSync('Nyropedia/Articles/' + args[0] + '/uid.txt');

            if(msg.author.id == uid) {
                if(isBlacklisted() == 0) {
                    (async() => {
                        try {
                            await del('Nyropedia/Articles/' + args[0] + '/');
                            embeds.succ(msg.channel, `${c} Successfully deleted ${args[0]}.`, 'Nyropedia - Delete article');
                            reduceArticlesCount();
                        } catch (err) {
                            console.error(err);
                        }
                    })();
                } else {
                    embeds.err(msg.channel, 'I\'m sorry, but it seems like your account is completely blacklisted from creating/deleting/editing articles.', '» ERROR 403');
                }
            } else {
                embeds.err(msg.channel, 'I\'m sorry, but this article is not from you.', '» ERROR 403');
            }
        } else {
            embeds.err(msg.channel, 'Article corrupted.', '» ERROR 404');
        }
    } else {
        embeds.err(msg.channel, 'Article not found.', '» ERROR 404');
    }
}

function cmd_npe(msg, args) {
    function isBlacklisted() {
        if(fs.existsSync('Nyropedia/Blacklist/' + msg.author.id + '.txt')) {
            return 1;
        } else {
            return 0;
        }
    }

    const c = client.emojis.cache.get('799943412589395969'); // Checkmark emoji

    var uid = fs.readFileSync('Nyropedia/Articles/' + args[0] + '/uid.txt');

    if(isBlacklisted() == 0) {
        if(fs.existsSync('Nyropedia/Articles/' + args[0] + '/article.txt') && fs.existsSync('Nyropedia/Articles/' + args[0] + '/uid.txt') && fs.existsSync('Nyropedia/Articles/' + args[0] + '/author.txt')) {
            if(msg.author.id == uid) {
                if(args[1] != '' || args[1] != ' ' || !args[1].startsWith(' ') || args[1] != null || args[1] != undefined) {
                    let fn = args[0];
                    args[0] = '';
                    fs.writeFile('Nyropedia/Articles/' + fn + '/article.txt', args.join(' '), (err) => {
                        embeds.succ(msg.channel, `${c} Successfully edited ${args[0]}`, '» Nyropedia - Edit article');
                    });
                } else {
                    embeds.err(msg.channel, 'Article content/text can\'t be nothing/start with an space.', '» ERROR 400');
                }

            } else {
                embeds.err(msg.channel, 'I\'m sorry, but this article is not from you.', '» ERROR 403');
            }
        } else {
            embeds.err(msg.channel, 'Article not found.', '» ERROR 404');
        }
    } else {
        embeds.err(msg.channel, 'I\'m sorry, but it seems like your account is completely blacklisted from creating/deleting/editing articles.', '» ERROR 403')
    }
}

function cmd_npr(msg, args) {
    embeds.imp(msg.channel, 'By using this service you have to accept the following rules and you agree that we are allowed to save you username and user ID! The rules can be changed anytime without warning.\n\n§1 » Friendly words\n§2 » No shit-posting\n§3 » No doxing/or other things that are not related to wiki articles\n§4 » No advertising\n§5 » No NSFW (Not Safe For Work = Porn, Gore, etc.) files\n§6 » No malicious links/files/etc.\n§7 » If your articles are against the rules your account will get blacklisted and **all** of your articles get deleted!', '» Nyropedia - Rules');
}

// Help Command

function cmd_help(msg) {
    const m = client.emojis.cache.get("757236261005164630"); // Moderation emoji
    const i = client.emojis.cache.get('757236260795580516'); // Information emoji
    const f = client.emojis.cache.get('757236261013553272'); // Fun emoji
    const rp = client.emojis.cache.get('757236260413636641'); // Roleplay emoji
    const np = client.emojis.cache.get('799640115953139742'); // Nyropedia emoji
    const mask = client.emojis.cache.get('800033840482746368'); // Mask emoji

    embeds.info(msg.channel, `${mask} __**Covid-19 Information**__:\n\`!wearamask\` - Information about the current situation.\n\n${m} __Moderation__\n\`!moderation\` - Stuff like kicking/banning.\n\n${i} __Information__\n\`!i\` - Stuff like bot info/changelog.\n\n${f} __Fun__\n\`!fun\` - Stuff like image manipulation/memes.\n\n${m} __Roleplay__\n\`!rp\` - Stuff like hugging/slapping.\n\n${m} __Nyropedia__\n\`!np\` - Own Wiki-System (Original code from zWolfy's old bot Nyro).`, '» Command-List');
}

function cmd_moderation(msg) {
    embeds.info(msg.channel, `**Only users with higher permissions can access these commands.**\n\n${help.m.kick}\n${help.m.ban}\n${help.m.clear}\n${help.m.announce}\n-> If you don't wanna use a thumbnail and banner for announcements, write instead of their URLs something different.`, '» Moderation-Commands');
}

function cmd_i(msg) {
    embeds.info(msg.channel, `${help.i.help}\n${help.i.botinfo}\n${help.i.changelog}\n${help.i.status}\n${help.i.credits}\n${help.i.partner}\n${help.i.ui}\n${help.i.si}`, '» Information-Commands');
}

function cmd_fun(msg) {
    embeds.info(msg.channel, `${help.f.coinflip}\n${help.f.yon}\n${help.f.meme}\n${help.f.wallpaper}`, '» Fun-Commands');
}

function cmd_rp(msg) {
    embeds.info(msg.channel, `${help.r.hug}\n${help.r.kiss}\n${help.r.slap}\n`, '» Roleplay-Commands');
}

function cmd_np(msg) {
    embeds.info(msg.channel, `**You have to accept all rules listed in !npr!**\nIf you break any rules you'll get blacklisted from Nyropedia forever.\n\n${help.np.nps}\n${help.np.npa}\n${help.np.npd}\n${help.np.npe}\n${help.np.npl}\n${help.np.npr}`, '» Nyropedia');
}

function cmd_bl(msg, args) {
    const c = client.emojis.cache.get('799943412589395969'); // Checkmark emoji

    fs.writeFile('Nyropedia/Blacklist/' + msg.author.id + '.txt', 'true', (err) => {
        embeds.succ(msg.channel, `${c} Successfully blacklisted the given User-ID (${args}) from Nyropedia.`, '» Nyropedia - Blacklisting')
    });
}

function cmd_eval(msg, args) {
    try {
        const code = args.join(" ");
        let evaled = eval(code);

        if(typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        msg.channel.send(evaled, { code: "xl" });
    } catch (err) {
        msg.channel.send(`ERROR xl\n${err}\n`);
    }
}

client.on('guildMemberAdd', (member) => {
    client.channels.cache.get('757189956115628125').send(`<@${member.id}> joined! Welcome, please read the <#757189844953989161> and <#757189871491088464>.`);

    if(!fs.existsSync(`Moderation/User/${member.id}.json`)) {
        fs.writeFile(`Moderation/User/${member.id}.json`, `{"cancommunity":"true"}`, (err) => {
            if(err) {
                console.log(err);
            }
        });
    }
});

client.on('message', (msg) => {
        var content = msg.content

        if(swear.words.includes(content.toLowerCase())) {
            msg.delete();

            embeds.blurple(client.channels.cache.get('800391619681583126'), `Message \`${msg.id}\` by \`${msg.author.tag}\` containing\n\n${content}\n\nwas deleted.`);
        }

        if(!msg.member.roles.cache.has('800025383625162752')) {
            if(Date.now() - msg.member.joinedTimestamp > 1000*60*60*24*7) {
                if(!swear.words.includes(msg.content.toLowerCase())) {
                    msg.member.roles.add('800025383625162752');
                } else {
                    const user = JSON.parse(fs.readFileSync(`Moderation/User/${msg.author.id}.json`));
                    const struser = JSON.stringify(user);
                    
                    fs.writeFileSync(`Moderation/User/${msg.author.id}.json`, struser.replace(`"cancommunity":"true"`, `"cancommunity":"false"`));

                    embeds.imp(msg.channel, 'Oops, RIP.. You lost your chance to get <@800025383625162752> forever! \;D', '» Lost Community Chance!');
                }
            }
        }

        // Dev-Commands

        if(content.startsWith(config.prefix)) {
            if(!msg.author.bot) {
                var invoke_dev_up = content.split(' ')[0].substr(config.prefix.length);
                var invoke_dev = invoke_dev_up.valueOf().toLowerCase();

                var args = content.split(' ').slice(1);
            } else {

            }
        }

        if(invoke_dev in cmdmap_dev) {
            if(msg.author.id == '434417514332815370') {
                cmdmap_dev[invoke_dev](msg, args);
            } else {
                if(invoke_dev in cmdmap_dev) {
                    embeds.err(msg.channel, 'You don\'t have permissions for Dev-Commands', '» ERROR 403');
                }
            }
        }

        // User-Commands

        if(content.startsWith(config.prefix)) {
            if(!msg.author.bot) {
                var invoke_up = content.split(' ')[0].substr(config.prefix.length);
                var invoke = invoke_up.valueOf().toLowerCase();

                var args = content.split(' ').slice(1);
            } else {
                return;
            }
        }

        if(invoke in cmdmap_user) {
            if(invoke == 'kick' || invoke == 'ban' || invoke == 'clear' || invoke == 'announce') {
                cmdmap_user[invoke](msg, args);
            } else {
                if(msg.channel.id == '757224139088986112') {
                    cmdmap_user[invoke](msg, args);
                } else {
                    msg.channel.send('You can\'t use commands here!');
                }
            }
        }
}),

client.on("messageDelete", (messageDelete) => {
    if(messageDelete.author.id != client.user.id) {
        if(!swear.words.includes(messageDelete.content.toLowerCase())) {
                if(!messageDelete.content.startsWith(`${config.prefix}announce`)) {
                    embeds.blurple(client.channels.cache.get('800048568630116352'), `Message \`${messageDelete.id}\` by \`${messageDelete.author.tag}\` containing\n\n${messageDelete.content}\n\nwas deleted.`);
                } else {
                    if(!messageDelete.member.hasPermission('MENTION_EVERYONE')) {
                        embeds.blurple(client.channels.cache.get('800048568630116352'), `Message \`${messageDelete.id}\` by \`${messageDelete.author.tag}\` containing\n\n${messageDelete.content}\n\nwas deleted.`);
                    }
                }
        }
    }
});

client.on("messageUpdate", (messageUpdate) => {
    if(messageUpdate.author.id != client.user.id) {
        embeds.blurple(client.channels.cache.get('800048607238684752'), `Message \`${messageUpdate.id}\` by \`${messageUpdate.author.tag}\` containing\n\n${messageUpdate.content}\n\nwas edited.`);
    }
});

client.login(config.token);