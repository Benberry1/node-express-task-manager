const TaskModel = require("../models/TaskModel");

const getAllTasks = (req, res) => {
  res.send({ body: "get all tasks" });
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

const getSingleTask = (req, res) => {
  res.send({ body: req.params.id });
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
