import express from "express";
import { tasksModel } from "../model/tasksModel";

export const createTasks = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.log("POST method called to create tasks");

    console.log("Body : ", req.body);
    const { title, desc, status } = req.body;
    const taskFound = await tasksModel.find({ title });
    if (taskFound.length > 0) {
      res.status(409);
      res.send({
        message: "Task with this title already exists.",
        task: taskFound,
      });
    } else {
      const taskAdd = await tasksModel.create({ title, desc, status });
      res.status(201).send(taskAdd);
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};

export const getAllTasks = async (
  req: express.Request,
  res: express.Response
) => {
  console.log("GET method called for all tasks");
  try {
    const allTasks = await tasksModel.find();
    if (allTasks.length < 0) {
      res.status(404).send({ message: "No task found!" });
    } else {
      res.status(200).send(allTasks);
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};

export const getTask = async (req: express.Request, res: express.Response) => {
  try {
    console.log("DELETE method called to delete task");

    const getTaskInfo = await tasksModel.findOne({
      _id: req.params.id,
    });
    console.log(getTaskInfo);
    if (!getTaskInfo) {
      res.status(404).send({ message: "Task details not found" });
    } else {
      res.status(200).send(getTaskInfo);
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};

export const updateTask = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.log("PUT method called to update task");

    const { id } = req.params;
    const updateData = req.body;
    const updatedTask = await tasksModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};

export const deleteTask = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.log("DELETE method called to delete task");

    const taskDeleted = await tasksModel.findByIdAndDelete({
      _id: req.params.id,
    });
    if (taskDeleted) {
      res.status(200).send({ message: "Task deleted succesfully" });
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
};
