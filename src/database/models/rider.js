module.exports = (sequelize, DataTypes) => {
  const Rider = sequelize.define(
    "Rider",
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    },
    {}
  );
  Rider.associate = () => {
    // associations can be defined here
  };
  return Rider;
};
