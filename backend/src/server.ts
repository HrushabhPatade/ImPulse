import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";

import tasksRoutes from "./routes/tasksRoutes";

dotenv.config();
connectDb();

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/", tasksRoutes);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
