const { MessageEmbed } = require('discord.js');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('config.json'));

const COLORS = {
    blue: 0x3498db,
    red: 0xe74c3c,
    yellow: 0xf1c40f,
    green: 0x32cd32,
    blurple: 0x7289da
}
module.exports = {

    imp(channel, content, title, thumbimg, bannerimg) {
        var message
        var emb = new MessageEmbed()
            .setColor(COLORS.yellow)
            .setDescription(content)
            .setFooter(`${config.botname} - by zWolfy`)
            .setTimestamp()
            .setThumbnail(thumbimg)
            .setImage(bannerimg)
        if(title) {
            emb.setTitle(title);
        }
        channel.send(emb).then((m) => {
            message = m
        })
        return message
    },

    err(channel, content, title, thumbimg, bannerimg) {
        var message
        var emb = new MessageEmbed()
            .setColor(COLORS.red)
            .setDescription(content)
            .setFooter(`${config.botname} - by zWolfy`)
            .setTimestamp()
            .setThumbnail(thumbimg)
            .setImage(bannerimg)
        if(title) {
            emb.setTitle(title);
        }
        channel.send(emb).then((m) => {
            message = m
        })
        return message
    },

    info(channel, content, title, thumbimg, bannerimg) {
        var message
        var emb = new MessageEmbed()
            .setColor(COLORS.blue)
            .setDescription(content)
            .setFooter(`${config.botname} - by zWolfy`)
            .setTimestamp()
            .setThumbnail(thumbimg)
            .setImage(bannerimg)
        if(title) {
            emb.setTitle(title);
        }
        channel.send(emb).then((m) => {
            message = m
        })
        return message
    },

    succ(channel, content, title, thumbimg, bannerimg) {
        var message
        var emb = new MessageEmbed()
            .setColor(COLORS.green)
            .setDescription(content)
            .setFooter(`${config.botname} - by zWolfy`)
            .setTimestamp()
            .setThumbnail(thumbimg)
            .setImage(bannerimg)
        if(title) {
            emb.setTitle(title);
        }
        channel.send(emb).then((m) => {
            message = m
        })
        return message
    },

    announce(channel, thumbimg, bannerimg, title, content) {
        var message
        var emb = new MessageEmbed()
            .setColor(COLORS.blurple)
            .setDescription(content)
            .setFooter(`${config.botname} - by zWolfy`)
            .setTimestamp()
            .setThumbnail(thumbimg)
            .setImage(bannerimg)
        if(title) {
            emb.setTitle(title);
        }
        channel.send(emb).then((m) => {
            message = m
        })
        return message
    },

    blurple(channel, content, title) {
        var message
        var emb = new MessageEmbed()
            .setColor(COLORS.blurple)
            .setDescription(content)
            .setFooter(`${config.botname} - by zWolfy`)
            .setTimestamp()
        if(title) {
            emb.setTitle(title);
        }
        channel.send(emb).then((m) => {
            message = m
        })
        return message
    }
}