import { create } from "domain";
import express from "express";
import {
  createTasks,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasksController";
import {
  validateCreateTask,
  validateUpdateTask,
} from "../middleware/inputValidation";

const router = express.Router();

// router.use(validateCreateTask, validateUpdateTask);

// router.route("/tasks").get(getAllTasks).post(createTasks);
// router.route("/tasks/:id").get(getTask).put(updateTask).delete(deleteTask);
router.get('/tasks', getAllTasks);
router.post('/tasks', validateCreateTask, createTasks);
router.get('/tasks/:id', getTask);
router.put('/tasks/:id', validateUpdateTask, updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
