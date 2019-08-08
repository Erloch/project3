const db = require("../models");

// Defining methods for the bucketController
module.exports = {
  findAll: function(req, res) {
    db.BLItem
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.BLItem
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.BLItem
      .create(req.body)
      .then(dbModel => {
        id = dbModel.id;
        return db.User.findOneAndUpdate({_id: req.body.userID},{$push: {bucketArray: id}}, {new: true})
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.BLItem
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.BLItem
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
 
};