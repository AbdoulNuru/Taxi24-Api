module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Drivers", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      currentLocationCoordinates: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isBooked: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Drivers");
  },
};
