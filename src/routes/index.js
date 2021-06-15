import { Router } from "express";
import swaggerjsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../utils/api-specifications";
import routes from "./api.routes";

const router = Router(),
  swaggerDoc = swaggerjsdoc(swaggerOptions);

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
router.use(routes);

export default router;
