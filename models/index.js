const mongoose = require("mongoose"),
      dbURL = process.env.DATABASEURL || "mongodb://localhost/todo-api"

mongoose.set("debug", true);
mongoose.connect(dbURL, {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");