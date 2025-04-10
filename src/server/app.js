const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const apiRouter = require("./routes/api");


const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// mount our api router here
app.use("/api", apiRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

// Serve the React app for any route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"), (err) => {
    if (err) {
      res.status(err.status).end();
    }
  });
});



module.exports = app;