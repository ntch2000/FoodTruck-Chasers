module.exports = function (sequelize, DataTypes) {
  const food_truck = sequelize.define("food_truck", {
    truck_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
      },
    },
    operator_username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
      },
    },
    // maybe change the datatype for phone number
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/i,
        notNull: true,
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
      },
    },
    promo_message: DataTypes.TEXT,
  });

  return food_truck;
};
