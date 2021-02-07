const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/savedOpportunitySchemas");
const cors = require("cors");
const config = require("./config");

const mongoUri = `mongodb+srv://${config.mongoUsername}:${config.mongoPassword}@${config.mongoHost}/${config.mongoDb}?retryWrites=true&w=majority`;

mongoose
  .connect(mongoUri, {
    // promiseLibrary: require("bluebird"),
    // useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.error(err));

const bioRouter = require("./routes/bio");
const indexRouter = require("./routes/index");
const proxyRouter = require("./routes/proxy");
const extractRouter = require("./routes/extract");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("*", cors());
app.use(
  "/graphql",
  cors(),
  graphqlHTTP({
    schema: schema,
    rootValue: global,
    graphiql: true,
  })
);
app.use("/bio", bioRouter);
app.use("/proxy", proxyRouter);
app.use("/extract", extractRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
