const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('homepage.ejs')
}

const getLife = (req, res) => {
    res.send('My life is beautiful!')
}

const getMy = (req, res) => {
    res.render('sample.ejs')
}

const postNewUser = (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    console.log("infor: ", email, name, city)

    connection.query(
        `INSERT INTO 
        Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results)
            res.send('Create User Success')
        }
    )
}

module.exports = {
    getHomepage, getLife, getMy, postNewUser
}