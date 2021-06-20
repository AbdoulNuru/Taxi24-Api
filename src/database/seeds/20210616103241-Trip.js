module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert("Trips", [
      {
        id: "13ba32d9-be4a-476d-a112-301e96a5b8b4",
        driverId: "27b7327e-e093-4ce5-b2a6-8f1caa1a44e9",
        riderId: "d61a4a20-2ed2-46c1-968d-f2804d3482e6",
        from: "Auca Gishushu",
        to: "MIC Building",
        startTime: new Date(),
        endTime: new Date(),
        isActive: "Yes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "832d14cd-735f-46d9-837b-01078209037a",
        driverId: "a2c67bc0-8831-460f-80d8-29c32dd6b56f",
        riderId: "3f9ea596-6c69-4f09-9f71-2395d29b0fba",
        from: "Kigali City Tower",
        to: "Kigali Convention Center",
        startTime: new Date(),
        endTime: new Date(),
        isActive: "Yes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "9d746af7-a588-41f7-9e01-b0b4de21f925",
        driverId: "c725042e-e49b-4592-8a09-e3e90f5d2ec2",
        riderId: "e52fdf30-0623-4840-8df1-14abc9a641b2",
        from: "Chez Lando",
        to: "Kabuga Bus Station",
        startTime: new Date(),
        endTime: new Date(),
        isActive: "No",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
  down: (queryInterface) => queryInterface.bulkDelete("Trips", null, {}),
};
