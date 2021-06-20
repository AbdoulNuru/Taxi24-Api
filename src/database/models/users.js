module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      gender: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {}
  );
  Users.associate = () => {
    // associations can be defined here
  };
  return Users;
};
