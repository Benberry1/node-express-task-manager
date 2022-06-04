const { CustomAPIError } = require("../errors/customError");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).send({ msg: err.message });
  }
  return res
    .status(500)
    .send({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;