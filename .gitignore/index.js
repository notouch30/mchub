const Discord = require('discord.js');

const client = new Discord.Client();

var prefix= '?';

var randnum = 0;

client.login('NDUyNDAzOTE5NjQyMDM0MTc2.Dfqz9w.uCZnFuc0iGDr6_zgh0AUg_wHM94');

client.on("ready", () => {
    console.log("Prêt au combat chef !");
    client.user.setGame("> ?aide");
});

client.on('message', message =>{

    if (message.content === "Bonjour"){
        message.channel.send(":sheep: Bienvenue au paradis des moutons ! :sheep:");
        console.log('Le bot a répondu à bonjour');
    }

    if (message.content === "cc"){
        message.channel.send(":sheep: Cui-Cui tu veux dire ? Regarde il y a des moutons volants! :sheep:");
        console.log('Le bot a répondu à bonjour');
    }

    if (message.content === "trkl et toi?"){
        message.channel.send(":sheep: Moi perso ça va oklm :D ! :sheep:");
        console.log('Le bot a répondu à trkl et toi');
    }
    
    if (message.content === "tfq?"){
        message.channel.send(":sheep: Moi j'attend mon tour pour la tonte :sob: ! :sheep:");
        console.log('tfq');
    }

    if (message.content === "Bonsoir"){
        message.channel.send(":sheep: Bonsoir ô mon beau mouton :sheep: ");
        console.log(`bsoir`);
    }
    
    if (message.content === "Aurevoir"){
        message.channel.send(":sheep: Aurevoir mon petit agneau, fait de beaux rêves...de moutons ! :sheep:");
        console.log(`arvwar`);
    }

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#CCFFCC")
        .setTitle("Voici la liste des commandes réalisables:")
        .setThumbnail(message.author.avatarURL)
        .addField("?help", "vous dévoile les commandes disponibles")
    
        .addField("?list", "vous dévoile le nombre de joueurs d'un grade")
        
        .addField("?stat", "vous envoie vos stats en privé !")
        
        .addField("?info", "Donne des infos sur le bot et le serveur !")
        
        .addField("?game start", "Petit jeu ou il faut trouver un nombre !")
        .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBYFYCxKUtoQwsrv7859KSo21o9AECc6ngDwz0UoULX_NXC-C")
        .setFooter("Page d'aide - Anti mouton bot")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a demandé la page d'aide")
    }

    if(message.content === prefix + "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#CCFFCC")
        .setTitle("Informations relatives au bot !")
        .addField(" :sheep: Nom: :sheep:", `${client.user.tag}`,true)
        .addField(" :sheep: Nombres de moutons sur ce serveur :sheep: :", message.guild.members.size)
        .addField("Nombres de catégories et de salons", message.guild.channels.size)
        .setFooter("Info - Anti mouton bot")
        .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdNreVo2j15LUfcLoFq9Hk17CCseQksHd2_pyv673gQ3W-oOb")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a fait m!info")
    }

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "stat":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#CCFFCC")
        .setTitle(` :sheep: Statistiques de l'utilisateur : ${message.author.username} :sheep: `)
        .addField(` :id: ID de l'utilisateur :id:`, msgauthor, true)
        .addField(" :date: Date de création de l'utilisateur :date: :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply(" :sheep: Tes statistiques ont été envoyé en privé ! Regarde tes MP ! :sheep: ")
        message.author.send({embed: stats_embed})
        break;
    }

    if(message.content === prefix + "list") {
        var liste_embed = new Discord.RichEmbed()
        .setColor("#CCFFCC")
        .setTitle("Choisissez le rôle à détailler : ")
        .setThumbnail(message.author.avatarURL)
        .addField(`Membres par rôles`, "__**```Utilise la commande ?list all```**__")
        .addField(`Membres onlines`, "__**```Utilise la commande ?list online```**__")
        .addField(`Membres offlines`, "__**```Utilise la commande ?list offline```**__")
        .setImage("http://www.ichtus.fr/wp-content/uploads/2017/04/mouton.jpg")
        .setFooter("Choix du rôle à inspecter - Anti mouton bot")
        
        message.channel.sendMessage(liste_embed);
    }
    
    if (message.content.startsWith(prefix + "list all")) {
        let roleID = "449266767274049541";
        let roleID1 = "449263299792470037";
        let roleID2 = "454957902411595777";
        let roleID3 = "454956699175092224";
        let roleID4 = "449520828908961802";
        let roleID5 = "449596432098525194";
        let roleID6 = "449521271248519168";
        let roleID7 = "449283419562573834";
        let roleID8 = "449227437104955393";

        let membersWithRole = message.guild.roles.get(roleID).members;
        let membersWithRole1 = message.guild.roles.get(roleID1).members;
        let membersWithRole2 = message.guild.roles.get(roleID2).members;
        let membersWithRole3 = message.guild.roles.get(roleID3).members;
        let membersWithRole4 = message.guild.roles.get(roleID4).members;
        let membersWithRole5 = message.guild.roles.get(roleID5).members;
        let membersWithRole6 = message.guild.roles.get(roleID6).members;
        let membersWithRole7 = message.guild.roles.get(roleID7).members;
        let membersWithRole8 = message.guild.roles.get(roleID8).members;
        
        var listee_embed = new Discord.RichEmbed()
        .setColor("#00ff0d")
        .setTitle("```Membres par rôles```")
        .setThumbnail(message.author.avatarURL)  
        .addField(`✨Builder✨: **${membersWithRole.size} moutons**`,"```> recrutements ON ! Envoyez vos créations à notouch30```")
        
        .addField(`🎨Graphiste🎨: **${membersWithRole1.size} moutons**`,"```> recrutements ON ! Envoyez vos créations à notouch30```")
        
        .addField(`🔥Skin Maker🔥: **${membersWithRole2.size} moutons**`,"```> recrutements ON ! Envoyez vos créations à notouch30```")
        
        .addField(`✏️Pack Maker✏️: **${membersWithRole3.size} moutons**`,"```> recrutements ON ! Envoyez vos créations à notouch30```")
        
        .addField(`💻VFX💻: **${membersWithRole4.size} moutons**`,"```> recrutements ON ! Envoyez vos créations à notouch30```")
       
        .addField(`📝Developpeur📝: **${membersWithRole5.size} moutons**`,"```> recrutements ON ! Envoyez vos créations à notouch30```")
        
        .addField(`📀Hebergeur📀: **${membersWithRole6.size} moutons**`,"```> recrutements ON ! Envoyez vos offres à notouch30```")
        
        .addField(`🎥Partenaire🎥: **${membersWithRole7.size} moutons**`,"```> recrutements ON ! Partenariat sur demande !```")
        
        .addField(`Membre du staff: **${membersWithRole8.size} moutons**`,"```> recrutements OFF ! Ne nous spammez pas c est clair?```")
        .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhFrBYcuzC-81qKNFWK3f42Z4_NETGRNv6C0z7BsYxmFpmS0c")
        .setFooter("Graphiste - Anti mouton bot")
        message.channel.sendMessage(listee_embed);
        console.log("Un utilisateur a fait m!liste graphiste")
    }
        
});

var number_random = 0
var party_launch= false;
client.on('message', function(message){
    if(message.content === prefix + "game start") {
        party_launch = true;
        message.channel.send("** :warning: Partie en cours de lancement, choisis ta difficulté en écrivant dans le tchat le mot qui correspond :warning: **```agneau (de 1 à 20) // mouton (de 1 à 50) // bêlier (de 1 à 100)```")
        client.on('message', message =>{
            if (message.content.startsWith("agneau")) {
                number_random = Math.floor(Math.random()*(20 - 0) + 0)
                message.channel.send("** :sheep: Vous avez démarré le jeu en mode jk...hum agneau ! :sheep:** A combien de moutons je pense ? (de 0 à 20)")
                console.log(number_random)
            }
            else if (message.content.startsWith("mouton")) {
                number_random = Math.floor(Math.random()*(50 - 0) + 0)
                message.channel.send("** :sheep: :sheep: Vous avez démarré le jeu en mode mouton ! :sheep: :sheep:** A combien de moutons je pense ? (de 0 à 50)")
                console.log(number_random)
            }
            else if (message.content.startsWith("mouton")) {
                number_random = Math.floor(Math.random()*(100 - 0) + 0)
                message.channel.send("** :sheep: :sheep: :sheep: Vous êtes courageux de demarrer le jeu en mode bêlier ! :sheep: :sheep: :sheep:** A combien de moutons je pense ? (de 0 à 100)")
                console.log(number_random)
            }
        });
    }
    
    if (party_launch){

        if(Number.isInteger(parseInt(message.content))){

            if(message.content > number_random){
                message.channel.send(":sheep: **moins** de moutons... :sheep:")

            }
            else if(message.content < number_random){
                message.channel.send(":sheep: **plus** de moutons ! :sheep:")
                
            }
            else{
                message.reply("a gagné la partie ! Tu deviens le roi des moutons ! :sheep:")
                party_launch = false;
            }

        }

    }

    if (message.content === prefix + "game stop"){
        if(party_launch ==true){
            message.reply(":sheep: Partie stopée, tu abandonnes déjà ? :sheep:")
            party_launch = false;
        }else{
            message.reply(":sheep: Il n'y a pas de partie lançée... ! :sheep:")
        }
    }
});
