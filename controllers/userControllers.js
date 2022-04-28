const users = require('../data/users');

module.exports = {
    register : (req,res) => res.render('register'),
    login : (req,res) => res.render('login')
}