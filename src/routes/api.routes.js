import { Router } from "express";
import driver from "../controllers/drivers.controller";

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
router.get("/get-drivers/:id", driver.GetDriverById);

export default router;
