module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    title: DataTypes.STRING
  });

  Recipes.associate = function(models) {
    Recipes.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Recipes;
};
