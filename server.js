const app = require("./app");
const port = 5001;
const connectDB = require("./db/connect");
require("dotenv").config();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening on http://localhost:${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
