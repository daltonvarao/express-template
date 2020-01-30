'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  post.associate = function(models) {
    post.belongsTo(models.usuario, {
      foreignKey: 'usuarioId', as: 'usuario'
    })
  };
  return post;
};