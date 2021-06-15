import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "welcome to taxi24",
  });
});

export default router;
