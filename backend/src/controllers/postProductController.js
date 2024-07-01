const { Product } = require("../db");

const postProductController = async (
  productName,
  type,
  images,
  description,
  year,
  surface
) => {
  // Buscar si existe un usuario con la misma dirección de correo electrónico y proveedor
  let product = await Product.findOne({ where: { productName } });

  if (!product) {
    // No se encontró un usuario con la misma dirección de correo electrónico y proveedor, crear uno nuevo
    product = await Product.create({
      productName,
      type,
      images,
      description,
      year,
      surface
    });
  }
  return product;
};

module.exports = postProductController;
