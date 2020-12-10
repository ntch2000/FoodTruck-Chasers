module.exports = function (sequelize, DataTypes) {
    const Game = sequelize.define("food_truck", {
      tuck_name: DataTypes.STRING,
      operator_firstname: DataTypes.STRING,
      operator_LastName: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      city: DataTypes.STRING,
      category: DataTypes.STRING,
      promo_message: DataTypes.STRING,
    
    });

  
    return food_truck;
  };