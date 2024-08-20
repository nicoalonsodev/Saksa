const qrcode = require('qrcode');
const { Client, LocalAuth  } = require('whatsapp-web.js');

const whatsapp = new Client({
  puppeteer: {
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  authStrategy: new LocalAuth(),
});

whatsapp.on('qr', qr => {
  qrcode.toFile('qrcode.png', qr, (err) => {
    if (err) {
      console.error('Failed to generate QR Code', err);
    } else {
      console.log('QR Code saved as qrcode.png');
    }
  });
});

whatsapp.on('ready', () => {
  console.log('Client is ready!');
});

module.exports = { whatsapp };
