'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET;

var Candidate = require('../models/candidate');

var userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  isAdmin: { type: Boolean, default: false },
  votedFor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }]
});