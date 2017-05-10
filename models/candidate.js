"use strict";

var mongoose = require('mongoose');

const JWT_SECRET = process.env.JWT_SECRET;
var User = require('../models/user');

var candidateSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  imgUrl: { type: String },
  score: [{ body: String, date: Date, category: String }],
  notes: { type: String }
});

var Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;