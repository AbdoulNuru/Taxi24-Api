module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    "Trip",
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
      isActive: DataTypes.STRING,
    },
    {}
  );
  Trip.associate = () => {
    // associations can be defined here
  };
  return Trip;
};
