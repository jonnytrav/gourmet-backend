const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
require("./database");
// basic boilerplate
app.use(bodyParser.json());
app.use(cors());
// API
const users = require("/api/users");
app.use("/api/users", users);
// NOT SURE IF I NEED NEXT FEW LINES
app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});
// **** END OF UNSURE CODE ****
// port settings
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}. Should be 8000.`);
});
