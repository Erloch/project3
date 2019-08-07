const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project3"
);

const doingThings = [
  {
    activity: "Skiing",
    author: "Stephen King",
    description:
      "Go down a mountain on peices of wood.",
    date: new Date(Date.now()),
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1852&q=80",
    completed: false
  }
];

db.BLItem
  .remove({})
  .then(() => db.BLItem.collection.insertMany(doingThings))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });