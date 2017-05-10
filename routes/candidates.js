'use strict';

var express = require('express');
var router = express.Router();

var request = require('request');
var bodyParser = require('body-parser');

var Candidate = require('../models/candidate');
var User = require('../models/user');

module.exports = router;