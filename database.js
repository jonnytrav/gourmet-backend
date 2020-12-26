const mongoose = require("mongoose");
const connection =
  "mongodb+srv://Traverso7:<1103LaurelSt>@<Gallery1>/<UserDB>?retryWrites=true&w=majority";

mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch(err => console.log(err.message ? err.message : err));
