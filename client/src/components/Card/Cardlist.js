import React from 'react';
import Axios from  'axios';

const db = require("../../../../models");

// Defining methods for the buddies
module.exports = {
  findAll: function(req, res) {
    db.Buddy
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Buddy
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }}

Axios.get("/api/buddies")
