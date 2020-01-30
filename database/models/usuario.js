'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  usuario.associate = function(models) {
    usuario.hasMany(models.post, {
      as: 'posts'
    })
  };
  return usuario;
};