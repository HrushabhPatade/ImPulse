import { create } from "domain";
import express from "express";
import {
  createTasks,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasksController";

const router = express.Router();

router.route("/tasks").get(getAllTasks).post(createTasks);
router.route("/tasks/:id").get(getTask).put(updateTask).delete(deleteTask);


export default router;
