const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Product", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(2080),
      allowNull: true,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    surface: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
  });
};
