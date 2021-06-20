module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    "Trip",
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      driverId: DataTypes.STRING,
      riderId: DataTypes.STRING,
      from: DataTypes.STRING,
      to: DataTypes.STRING,
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
      isActive: DataTypes.STRING,
    },
    {}
  );
  Trip.associate = (models) => {
    // associations can be defined here
    Trip.belongsTo(
      models.Users,
      { foreignKey: "driverId" },
      { onDelete: "cascade" },
      { onUpdate: "cascade" }
    );
    Trip.belongsTo(
      models.Users,
      { foreignKey: "riderId" },
      { onDelete: "cascade" },
      { onUpdate: "cascade" }
    );
  };
  return Trip;
};
