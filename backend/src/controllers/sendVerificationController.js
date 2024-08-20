// sendVerificationController.js
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Asegúrate de configurar tus variables de entorno
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const sendVerificationController = async (phoneNumber, verificationCode) => {
    try {
        const message = await client.messages.create({
            from: 'whatsapp:+12564809492', // Reemplaza con tu número de WhatsApp en Twilio
            to: `whatsapp:${phoneNumber}`, // Usa el número recibido en la solicitud
            body: 'Buenisimo', // Puedes dejar el body vacío si usas una plantilla
            // messagingServiceSid: 'HX92458bb48379792330f1282fb37e9f22',
            template: {
                name: 'verificacionrevolution', // Nombre del template que has creado
                language: {
                    code: 'es', // Código de idioma; por ejemplo, 'es' para español
                },
                components: [
                    {
                        type: 'body',
                        parameters: [
                            {
                                type: 'text',
                                text: verificationCode, // Usa el código de verificación recibido en la solicitud
                            },
                        ],
                    },
                ],
            },
        });

        return message.sid; // Retorna el SID del mensaje
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = sendVerificationController;
