const TaskModel = require("../models/TaskModel");
const mongoose = require("mongoose");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const allTasks = await TaskModel.find({});
  res.status(200).send(allTasks);
});

const createTask = asyncWrapper(async (req, res) => {
  const { body } = req;
  const newTask = new TaskModel(body);
  await newTask.save();
  res.status(201).send(newTask);
});

const getSingleTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  if (isValidId) {
    const task = await TaskModel.findById({ _id: id });
    if (task) {
      return res.status(200).send(task);
    } else {
      return res.status(404).send({ message: "task not found" });
    }
  } else {
    res.status(400).send({ message: "invalid id" });
  }
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  if (isValidId) {
    const task = await TaskModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (task) {
      return res.status(200).send(task);
    } else {
      return res.status(404).send({ message: "task not found" });
    }
  } else {
    res.status(400).send({ message: "invalid id" });
  }
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const isValidId = mongoose.Types.ObjectId.isValid(id);
  if (isValidId) {
    const task = await TaskModel.findByIdAndDelete(id);
    if (task) {
      return res.status(200).send({ message: `Task deleted` });
    } else {
      return res.status(404).send({ message: "task not found" });
    }
  } else {
    res.status(400).send({ message: "Invalid id" });
  }
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
