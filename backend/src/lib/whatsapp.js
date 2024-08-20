const qrcode = require('qrcode');
const { Client, LocalAuth } = require('whatsapp-web.js');

let qrCodeData = '';  // Variable para almacenar el código QR

const whatsapp = new Client({
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  authStrategy: new LocalAuth(),
});

whatsapp.on('qr', qr => {
  qrCodeData = qr;  // Almacenamos el código QR cuando se recibe
  console.log('QR Code received.');
});

whatsapp.on('ready', () => {
  console.log('Client is ready!');
});

module.exports = { whatsapp, qrCodeData };
