const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for(const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

const prefix = '!';

client.once('ready', () =>
{
    console.log('bot jest online');

    client.user.setActivity('Zarządza serwerem', {type: 'LISTENING'})
});

client.on('messageCreate', async message =>
{ 
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Ta komenda nie działa');
    }
});

client.on('interactionCreate', async interaction => {
    if(interaction.customId == 'role3') {
        const roleId = '1001153148708208650'; 
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'role2') {
        const roleId = '1001153446910627840';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'role1') {
        const roleId = '1001153579370946730';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

    if(interaction.customId == 'Akcept') {
        const roleId = '1002656148551372881';
        const role = interaction.guild.roles.cache.get(roleId);

        if(interaction.member.roles.cache.has(roleId)) {
            await interaction.member.roles.remove(role);
            await interaction.reply({ content: `Nie Akceptujesz Regulaminu`, ephemeral: true });
        } else {
            await interaction.member.roles.add(roleId);
            await interaction.reply({ content: `Akceptujesz Regulamin`, ephemeral: true });
        }

        // await interaction.deferUpdate();
    }

});

client.login('MTAwMTE4MTczNTQyNzUwNjI2Ng.GSZDN8.W6Ldu9MONgFUU-1zhV11EyG5HxxjMsuFHn26x8');