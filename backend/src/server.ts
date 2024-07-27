import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import e from "cors";
import tasksRouters from "./routes/tasksRoutes";

dotenv.config();
connectDb();

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json);
app.use(express.urlencoded);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/", tasksRouters);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
