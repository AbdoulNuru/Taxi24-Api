module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      gender: DataTypes.STRING,
      dob: DataTypes.DATE,
    },
    {}
  );
  Users.associate = () => {
    // associations can be defined here
  };
  return Users;
};
