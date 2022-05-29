const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Sélectionnez le type de ticket à créer.')
					.addOptions([
						{
							label: '📁 Partenariat',
							description: 'Ouvrez un ticket pour faire une demande de partenariat . ',
							value: 'partenariat',
						},
						{
							label: '📌 Aide/Question',
							description: "Ouvrez un ticket si vous avez besoin d'aide ou d'un renseignement !",
							value: 'question',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Ouvrir un ticket',
                description: '**Quelle est la raison de votre ticket ?**\nVeuillez choisir le type de ticket que vous souhaitez ouvrir.',
                color: "PURPLE", 
                footer: {text: 'LeMonde - Ticket'}
            }],
            components: [row]
        })
    }
}
