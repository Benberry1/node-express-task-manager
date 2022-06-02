const getAllTasks = (req, res) => {
  res.send({ body: "get all tasks" });
};

const createTask = (req, res) => {
  res.send({ body: req.body });
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
