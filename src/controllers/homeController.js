const connection = require('../config/database')

const getHomepage = (req, res) => {
    //process data
    //call model 
    let users = []

    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results
            console.log(">>>users", users); // fields contains extra meta data about results, if available
            res.send(users); //
        }
    );
}

const getLife = (req, res) => {
    res.send('My life is beautiful!')
}

const getMy = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getLife, getMy
}