require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();



app.use(express.json());


app.use(cors({ origin: "*" }));

mongoose
  .connect(
    process.env.DB_URI
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1/accounts", require("./routes/accounts.routes"));
app.use("/api/v1/product", require("./routes/product.routes"));

app.listen(process.env.PORT, () => {
  console.log("Server started!");
});
