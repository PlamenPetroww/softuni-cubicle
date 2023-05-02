const db = require('../db.json');

exports.getHomePat = (req, res) => {
    res.render('index', {cubes: db.cubes}); 
};

exports.getAboutPage = (req, res) => {
    res.render('about');
};