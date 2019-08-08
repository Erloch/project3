const mongoose = require("mongoose");
const db = require("../models");
// import Climb from "./public/assets/images/climb.jpg"
// import Scuba from "./public/assets/images/scuba.jpg"
// import SkyDiving from "./public/assets/images/SkyDiving.jpg"

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
  },
  {
    activity: "Sky Diving",
    author: "King Stephen",
    description:
      "Jumping out of an airplane.",
    date: new Date(Date.now()),
    image: "https://media.giphy.com/media/1QdRoqyqXDMktztwrA/giphy.gif",
    completed: false
  },
  {
    activity: "Scuba Diving",
    author: "Scuba Steve King",
    description:
      "Jumping into water.",
    date: new Date(Date.now()),
    image: "https://media.giphy.com/media/cNZP7NkRV8A0KgY43X/giphy.gif",
    completed: false
  },
  {
    activity: "Mountain Climbing",
    author: "King Climb",
    description:
      "Go up a mountain on peices of wood.",
    date: new Date(Date.now()),
    image: "https://media.giphy.com/media/xT4uQvE6Dm6go7psJ2/giphy.gif",
    completed: true
  },
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