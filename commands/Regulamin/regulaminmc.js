const Discord = require('discord.js');

module.exports = {
    name: 'regulaminmc',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik) 
    description: 'Testowa komenda', //Opis komendy
    usage: '!regulaminmc',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik plus na poczatek wykrzyknik)
    execute: async(message, args) => {
        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('Akcept')
            .setLabel('Akceptuje Regulamin ✅')
            .setStyle("SECONDARY"),
        );

        const embed = new Discord.MessageEmbed()
        .setColor('#0ed2f0')  //Color wybrać na Hex color (robi to pasek z boku wiadmości)
        .setTitle('Regulamin Serwera 📜')
        .addFields(
            {name: '**____§____**', value: '\u200b \n ``` ```\n \u200b'},
            {name: '**____§____**', value: '\u200b \n ``` ``` \n \u200b'},
            {name: '**____§____**', value: '\u200b \n ``` ``` \n \u200b'},
            {name: '**____§____**', value: '\u200b \n ``` ``` \n \u200b'},
        )
        .setImage('https://cdn.discordapp.com/attachments/979658982614532127/1002959147119149086/Folder_19.png')

        message.channel.send({ embeds: [embed], components: [buttons]  });
    }
}