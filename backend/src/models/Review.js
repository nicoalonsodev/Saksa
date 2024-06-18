const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Review', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type:DataTypes.STRING(2080),
      allowNull: true
    },
    rol: {
        type: DataTypes.STRING,
        defaultValue: 'usuario',
    },
    favorites: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
  },
  });
};
