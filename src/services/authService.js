const User = require('../models/User');

exports.getUserByUsername = (username) => User.findOne({ username });

exports.register = async (username, password) => User.create({ username, password });

