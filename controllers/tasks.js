const TaskModel = require("../models/TaskModel");
const mongoose = require("mongoose");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await TaskModel.find({});
    res.status(200).send(allTasks);
  } catch (error) {
    res.status(500).send({ message: "There was an error" });
  }
};

const createTask = async (req, res) => {
  try {
    const { body } = req;
    const newTask = new TaskModel(body);
    await newTask.save();
    res.status(201).send(body);
  } catch (error) {
    res.status(500).send({ message: "There was an error" });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    console.log(isValidId);
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
  } catch (error) {
    res.status(500).send({ message: "There was an error" });
  }
};

const updateTask = (req, res) => {
  res.send({ body: req.body });
};

const deleteTask = (req, res) => {
  res.send({ body: "deleted" });
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
