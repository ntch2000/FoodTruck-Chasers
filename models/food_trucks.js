module.exports = function (sequelize, DataTypes) {
  const Game = sequelize.define("food_truck", {
    truck_name: DataTypes.STRING,
    operator_firstName: DataTypes.STRING,
    operator_LastName: DataTypes.STRING,
    // maybe change the datatype for phone number
    phone: DataTypes.INTEGER,
    city: DataTypes.STRING,
    category: DataTypes.STRING,
    promo_message: DataTypes.STRING,
  });

  return food_truck;
};
