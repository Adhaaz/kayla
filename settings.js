const chalk = require("chalk")
const fs = require("fs")

global.hituet = 0
global.creator = "6285348242252@s.whatsapp.net"
global.thumb = fs.readFileSync(`./image/thumb.jpg`)
global.fake = `📍Created by AnsBot🌚`
global.packname = ``
global.author = `                   🌚AnsBot\n🌚Bot Number: 6289691676082`
global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = false
global.ownerNomor = '6285348242252'
global.ownerName = 'Creator AnshorXD'
global.ownerNumber = ["6285348242252@s.whatsapp.net"]
global.mess = {
    wait: 'Wait Sis Please be patient',
    succes: 'Good Luck Sis ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Ente Kadang-kadang Ente, Nih Khusus Owner Nih!!!',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})