require("./module")

global.owner = "62895364760801" //PAKE NO LU BIAR BISA ADD AKSES
//======================================
global.namabot = "𝐑𝐢𝐳𝐱𝐳𝐁𝐨𝐭𝐖𝐚𝐧𝐠𝐜𝐚𝐩𝐩 𝐓𝐞𝐦𝐛𝐮𝐬𝐁𝐞𝐭𝐚" //NAMA BOT GANTI
//======================================
global.nameCreator = "𝐑𝐢𝐳𝐱𝐳𝐖𝐚𝐧𝐠𝐬𝐚𝐟𝐟𝐝𝐞𝐯𝐨𝐥𝐨𝐩𝐞𝐫" //NAMA CREATOR GANTI AJA
//======================================
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
//======================================
global.antilink = true //NOT CHANGE / JANGAN GANTI
//======================================
global.versisc = '1.0.0' //NOT CHANGE / JANGAN GANTI
//======================================
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
//======================================
global.domain = 'https://vvip-rizxz.store-panel.online' //DOMAIN 1
//======================================
global.apikey = 'ptla_HDAA07tpGoCk09LZTMbePt6FPrXLwlde1OCMlUbSu7T' // PLTA 1
//======================================
global.capikey = 'ptlc_3215srTKIRGjGpgVb2jFF5TRaj4ROKd78WSnvdvv73q' //PLTC 1
//======================================
global.eggsnya = '15' //ID EGGS 1
//=====================================
global.location = '1' //SEMUA LOCATION SAMA AJA BIAR G EROR
//======================================
global.imageurl = 'https://telegra.ph/file/bbd9c5027512cc31f5309.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
//======================================
global.isLink = 'https://chat.whatsapp.com/D46YckBhjvn3fkXuGOlAoR' ///GANTI MENGGUNAKAN LINK GRUBMU YA
//======================================
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.imgmenu = fs.readFileSync("./Media/Menu.jpg")
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.linksaluran = "https://whatsapp.com/channel/0029VadYucKIiRovPAOuws1k"
global.linkyt = 'https://youtube.com/@skyoffc?si=jmV2HnB9OTMFIAjg'
global.idsaluran = "120363257033988496@newsletter"
global.simbol = 'ダ'
global.simbol1 = '❖'
global.simbol2 = '✦'
global.tekspushkon = "" //NOT CHANGE / JANGAN GANTI
global.tekspushkonv2 = "" //NOT CHANGE / JANGAN GANTI
global.packname = "𝘉𝘰𝘵 𝘉𝘺" //GANTI AJ
global.author = "𝐑𝐢𝐳𝐱𝐳𝐖𝐚𝐧𝐠𝐬𝐚𝐟𝐟𝐝𝐞𝐯𝐨𝐥𝐨𝐩𝐞𝐫" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})