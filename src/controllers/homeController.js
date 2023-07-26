const connection = require('../config/database')
const { getAllUsers, getUsersbyID, updateUsersbyID } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let results = await getAllUsers()
    return res.render('homepage.ejs', { listUsers: results })
}

const getLife = (req, res) => {
    res.send('My life is beautiful!')
}

const getMy = (req, res) => {
    res.render('sample.ejs')
}

const postNewUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    console.log("infor: ", email, name, city)

    let [results, fields] = await connection.query(
        `INSERT INTO  Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city],
    )


    res.send('Created user successfully!!!')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await getUsersbyID(userId)
    res.render('edit.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let userId = req.body.userId

    console.log("infor: ", email, name, city, userId)

    await updateUsersbyID(email, name, city, userId)

    // res.send('Updated user successfully!!!')
    //Comeback home directly
    res.redirect('/')
}

module.exports = {
    getHomepage, getLife, getMy, postNewUser, getCreatePage
    , getUpdatePage, postUpdateUser
}