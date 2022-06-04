const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes

app.use("/api/v1/tasks", tasks);

app.use(notFound);

app.use(errorHandlerMiddleware);

module.exports = app;
