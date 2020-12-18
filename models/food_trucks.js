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
    logo: {
      type: DataTypes.TEXT,
      defaultValue: "https://res.cloudinary.com/dwc5cle4q/image/upload/v1608255607/Food%20Truck%20Chasers/YourLogoGoesHere_jcpna2.png"
    },
    promo_message: DataTypes.TEXT,
  });

  return food_truck;
};
