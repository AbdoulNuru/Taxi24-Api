import path from "path";
import os from "os";
import dotenv from "dotenv";

dotenv.config();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Farmers Investors Connect",
      version: "1.0.0",
      description: ``,
      license: {},
      contact: {},
    },
    components: {},
    security: {},
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        name: `${os.hostname()}`,
      },
      {
        url: `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`,
        name: `${os.hostname()}`,
      },
    ],
  },
  apis: [path.resolve(__dirname, "../routes/*.js")],
};

export default swaggerOptions;
