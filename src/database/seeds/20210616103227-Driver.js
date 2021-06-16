module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert("Drivers", [
      {
        id: "090ec6c6-4884-4ca7-94b1-26a2ed842253",
        currentLocationCoordinates: "1.23333333333",
        isBooked: "No",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "d01cf3f2-4601-4b53-8ffd-fd46b5ded623",
        currentLocationCoordinates: "1.233333334433",
        isBooked: "No",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
  down: (queryInterface) => queryInterface.bulkDelete("Drivers", null, {}),
};
