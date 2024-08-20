const qrcode = require('qrcode'); // Cambiamos a 'qrcode' para poder generar la imagen del QR
const { Client, LocalAuth } = require('whatsapp-web.js');

let qrCodeData = '';  // Variable para almacenar el QR Code

const whatsapp = new Client({
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  authStrategy: new LocalAuth(),
});

whatsapp.on('qr', qr => {
  qrCodeData = qr;  // Almacenamos el código QR recibido
  console.log('QR Code received.');
});

whatsapp.on('ready', () => {
  console.log('Client is ready!');
});

whatsapp.initialize();

module.exports = { whatsapp, qrCodeData };
