const app = require("./app");
const port = 5001;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`);
});
