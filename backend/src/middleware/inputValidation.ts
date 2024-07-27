import { check } from "express-validator";

export const validateCreateTask = [
  check("title").notEmpty().withMessage("Title is requied"),
  check("desc").notEmpty().withMessage("Description is requied"),
  check("status")
    .isIn(["To-Do", "In Progress", "Done"])
    .withMessage("Status Invalid"),
];

export const validateUpdateTask = [
  check("title").optional().notEmpty().withMessage("Title is requied"),
  check("desc").optional().notEmpty().withMessage("Description is requied"),
  check("status")
    .optional()
    .isIn(["To-Do", "In Progress", "Done"])
    .withMessage("Status Invalid"),
];
