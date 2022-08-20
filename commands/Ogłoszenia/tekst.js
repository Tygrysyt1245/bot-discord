const Discord = require('discord.js');

module.exports = {
    name: 'tekst',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik) 
    description: 'Komendan Ogłoszeniowa', //Opis komendy
    usage: '!tekst',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik plus na poczatek wykrzyknik)
    execute: async(message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('#7400f0')  //Color wybrać na Hex color (robi to pasek z boku wiadmości)
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .setTitle('Ogłoszenie 📑')
        .addFields(
            {name: 'Nazwa fieldu 1', value: 'Opis Fieldu 1', inline: false},
        )
        .setTimestamp() //Na dolnym pasku pokazuje godzine wysłania komendy
        .setFooter({ text: 'Wykonawca komendy', iconURL: 'https://cdn.discordapp.com/avatars/713842348051791883/de605a789fde7649bcb73688a21b8ab1.webp?size=2048' }); //Na dolnym pasku pokazuje avatar author jak i tag

        message.channel.send({ embeds: [embed] });
    }
}