const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes

app.use("/api/v1/tasks", tasks);

module.exports = app;
