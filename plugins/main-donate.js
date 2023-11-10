
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *SUPPORT*
_Join Black Support Group_ 
Link https://chat.whatsapp.com/CAB2fLbnv1wJFFY9lqFH81`
let img = 'https://replicate.delivery/pbxt/CJyMWxJtxTL2O5nFrc3askbFihaLccVBBahyVdFpEV4RElcE/out..jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
