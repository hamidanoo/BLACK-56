
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *SUPPOERT*
Share BLACK Bot Link And Support. Git Link https://github.com/hamidanoo/BLACK-56`
let img = 'https://replicate.delivery/pbxt/CJyMWxJtxTL2O5nFrc3askbFihaLccVBBahyVdFpEV4RElcE/out..jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
