module.exports = function (sequelize, DataTypes) {
  const Game = sequelize.define("food_truck", {
    truck_name: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notNull: true,
      },
    },
    operator_firstName: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notNull: true,
      },
    },
    operator_LastName: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notNull: true,
      },
    },
    // maybe change the datatype for phone number
    phone: {
      type: DataTypes.STRING,
      validate: {
        is: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/i,
        notNull: true,
      },
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notNull: true,
      },
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
        notNull: true,
      },
    },
    promo_message: DataTypes.TEXT,
  });

  return food_truck;
};