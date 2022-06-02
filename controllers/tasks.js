const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = (req, res) => {
  res.send({ body: req.body });
};

const getSingleTask = (req, res) => {
  res.send({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send({ body: req.body });
};

const deleteTask = (req, res) => {
  res.send({ task: "deleted" });
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
