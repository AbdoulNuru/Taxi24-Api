module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Trips", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      driverId: {
        type: Sequelize.STRING,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "Users",
          key: "id",
        },
      },
      riderId: {
        type: Sequelize.STRING,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "Users",
          key: "id",
        },
      },
      from: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      to: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endTime: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      isActive: {
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
    await queryInterface.dropTable("Trips");
  },
};
