import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express(),
  port = process.env.PORT || 8025;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors);

app.listen(port, () => {
  console.log(`Taxi24 server is up and running on port ${port}`);
});
