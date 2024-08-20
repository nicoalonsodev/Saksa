const { Router } = require("express");
const router = Router();
const multer = require("multer");
const qrcode = require('qrcode'); // Importamos la biblioteca para generar el código QR

const { getAllProductsHandler } = require("../handlers/getAllProductsHandler");
const { getProductByIdHandler } = require("../handlers/getProductByIdHandler");
const { getUsersHandler } = require("../handlers/getUsersHandler");
const { deleteProductHandler } = require("../handlers/deleteProductHandler");
const { postProductHandler } = require("../handlers/postProductHandler");
const { postUserHandler } = require("../handlers/postUserHandler");
const { putUserHandler } = require("../handlers/putUserHandler");
const { putProductHandler } = require("../handlers/putProductHandler");
const { authenticateToken } = require('../helpers/authenticateToken');
const { loginHandler, protectedRouteHandler } = require('../handlers/authHandler');
const { deleteUserHandler } = require('../handlers/deleteUserHandler');
const { sendWhatsapp } = require('../handlers/postVerificationHandler');

const { qrCodeData } = require('../lib/whatsapp'); // Importamos la variable donde almacenamos el QR

router.get("/products", getAllProductsHandler);
router.get("/products/:id", getProductByIdHandler);
router.get("/users", getUsersHandler);

router.post('/login', loginHandler);
router.get('/admin', authenticateToken, protectedRouteHandler);

router.post("/products", postProductHandler);
router.post("/users", postUserHandler);
router.post('/send-verification', sendWhatsapp);

router.put("/products/:id", putProductHandler);
router.put("/users/:id", putUserHandler);

router.delete("/product/:id", deleteProductHandler);
router.delete("/user/:id", deleteUserHandler);

// Nueva ruta para mostrar el QR Code
router.get('/show-qr', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  
    if (qrCodeData) {
      qrcode.toDataURL(qrCodeData, (err, url) => {
        if (err) {
          res.status(500).send('Error generating QR code');
        } else {
          res.send(`<img src="${url}">`);
        }
      });
    } else {
      res.send(`
        <p>QR code not available yet. Please try again later.</p>
        <script>
          setTimeout(() => {
            window.location.reload();
          }, 3000); // Recarga la página cada 3 segundos
        </script>
      `);
    }
  });
  

module.exports = router;
