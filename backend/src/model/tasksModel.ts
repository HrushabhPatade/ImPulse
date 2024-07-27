import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["To-Do", "In Progress", "Done"],
    },
  },
  {
    timestamps: true,
  }
);

export const tasksModel = mongoose.model("tasks", tasksSchema);
