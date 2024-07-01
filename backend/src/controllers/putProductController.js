const { Product } = require("../db");

const putProductController = async (id, updatedFields) => {
  try {
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      throw new Error("No se encontró la propiedad.");
    }

    // Desestructurar los campos actualizados del objeto updatedFields
    const {
      productName,
      type,
      images,
      description,
      year,
      surface
    } = updatedFields;

    // Actualizar los campos del producto solo si se proporcionan en updatedFields
    if (productName) {
      product.productName = productName;
    }
    if (type) {
      product.type = type;
    }
    if (images) {
      product.images = images;
    }
    if (year) {
      product.year = year;
    }
    if (surface) {
      product.surface = surface;
    }
    if (description) {
      product.description = description;
    }

    await product.save();

    return product;
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error; 
  }
};

module.exports = {
  putProductController,
};
