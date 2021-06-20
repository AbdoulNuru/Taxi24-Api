import { Router } from "express";
import driver from "../controllers/drivers.controller";
import rider from "../controllers/riders.controller";
import trip from "../controllers/trips.controller";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "welcome to taxi24",
  });
});

// Drivers Routes
router.get("/get-drivers", driver.GetAllDrivers);
router.get("/get-available-drivers", driver.GetAvailableDrivers);
router.get("/get-nearest-drivers", driver.GetNearestDrivers);
router.get("/get-drivers/:id", driver.GetDriverById);

// Riders Routes
router.get("/get-riders", rider.GetAllRiders);
router.get("/get-riders/:id", rider.GetRiderById);

// Trips Routes
router.post("/trips", trip.newTrip);
router.post("/complete-trip", trip.completeTrip);
router.get("/get-trips", trip.GetActiveTrips);

export default router;
