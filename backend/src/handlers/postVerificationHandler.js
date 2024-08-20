const {whatsapp} = require('../lib/whatsapp');


const sendWhatsapp = async(req, res)=>{
    const {verificationCode} = req.body;
  const tel = '+5493815522572'
  const chatId = tel.substring(1) + "@c.us";
  const number_details = await whatsapp.getNumberId(chatId);
  if(number_details){
    const mensaje = `Este es tu codigo ${verificationCode}!`
    await whatsapp.sendMessage(chatId, mensaje);
    res.json({res: true})
  }else{
    res.json({res: false})
  }
}

module.exports = {sendWhatsapp};