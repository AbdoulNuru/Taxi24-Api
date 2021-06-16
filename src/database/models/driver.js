module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define(
    "Driver",
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      currentLocationCoordinates: DataTypes.STRING,
      isBooked: DataTypes.STRING,
    },
    {}
  );
  Driver.associate = () => {
    // associations can be defined here
  };
  return Driver;
};
