'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define('menus', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING,
    isStared: DataTypes.TINYINT
  }, {});
  menus.associate = function(models) {
    // associations can be defined here
  };
  return menus;
};