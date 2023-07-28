const connection = require('../config/database')
const { getAllUsers, getUsersbyID, updateUsersbyID } = require('../services/CRUDService')
const User = require('../models/user')

const getHomepage = async (req, res) => {
    let results = await User.find({})
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

    await User.create({ email, name, city })

    res.send('Created user successfully!!!')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await User.findById(userId)
    res.render('edit.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let userId = req.body.userId

    console.log("infor: ", email, name, city, userId)

    // await updateUsersbyID(email, name, city, userId)
    await User.findByIdAndUpdate(userId, { email, name, city })

    // res.send('Updated user successfully!!!')
    //Comeback home directly
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    let user = await User.findById(userId)
    res.render('delete.ejs', { userDelete: user })
}

const postHandleDeleteUser = async (req, res) => {
    let userId = req.body.userId
    await User.findByIdAndRemove(userId)
    res.redirect('/')
}

module.exports = {
    getHomepage, getLife, getMy, postNewUser, getCreatePage
    , getUpdatePage, postUpdateUser, postHandleDeleteUser, postDeleteUser
}