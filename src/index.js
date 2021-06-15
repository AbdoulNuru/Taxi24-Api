import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index";

dotenv.config();

const app = express(),
  port = process.env.PORT || 8025;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Taxi24 server is up and running on port ${port}`);
});

export default app;
