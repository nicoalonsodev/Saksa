const { Router } = require("express");
const router = Router();
const multer = require("multer");

const { getAllProductsHandler } = require("../handlers/getAllProductsHandler");
const { getProductByIdHandler } = require("../handlers/getProductByIdHandler");
const { getUsersHandler } = require("../handlers/getUsersHandler");
const { deleteProductHandler } = require("../handlers/deleteProductHandler");
const { postProductHandler } = require("../handlers/postProductHandler");
const { postUserHandler } = require("../handlers/postUserHandler");
const { putUserHandler } = require("../handlers/putUserHandler");
const { putProductHandler } = require("../handlers/putProductHandler");

const { authenticateToken } = require('../helpers/authenticateToken');
const {loginHandler} = require('../handlers/authHandler');
const {protectedRouteHandler} = require('../handlers/authHandler');
const {deleteUserHandler} = require('../handlers/deleteUserHandler');

router.get("/products", getAllProductsHandler);
router.get("/products/:id", getProductByIdHandler);
router.get("/users", getUsersHandler);

router.post('/login', loginHandler);
router.get('/admin', authenticateToken, protectedRouteHandler);

router.post("/products", postProductHandler);
router.post("/users", postUserHandler);

router.put("/products/:id", putProductHandler);
router.put("/users/:id", putUserHandler);


router.delete("/product/:id", deleteProductHandler);
router.delete("/user/:id", deleteUserHandler);

module.exports = router;
