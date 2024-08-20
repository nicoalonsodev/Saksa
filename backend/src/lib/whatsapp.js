const qrcode = require('qrcode'); 
const { Client, LocalAuth } = require('whatsapp-web.js');

let qrCodeData = ''; 

const whatsapp = new Client({
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  authStrategy: new LocalAuth(),
});

whatsapp.on('qr', qr => {
  qrCodeData = qr;
  qrcode.toFile('qrcode.png', qr, function (err) {
    if (err) throw err;
    console.log('QR code saved as qrcode.png');
  });
});

whatsapp.on('ready', () => {
  console.log('Client is ready!');
});

whatsapp.initialize();
