const User = require('../models/user')
const { uploadSingeFile } = require('../services/fileService')

const getUsers = async (req, res) => {
    let results = await User.find({})

    return res.status(200).json({
        EC: 0,
        data: results
    })
}

const postNewUsers = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let users = await User.create({ email, name, city })

    return res.status(200).json({
        EC: 0,
        data: users
    })
}

const putUpdateUsers = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let userId = req.body.userId

    let users = await User.findByIdAndUpdate(userId, { email, name, city })

    return res.status(200).json({
        EC: 0,
        data: users
    })

}

const deleteUsers = async (req, res) => {
    let userId = req.body.userId
    let result = await User.findByIdAndRemove(userId)

    return res.status(200).json({
        EC: 0,
        data: result
    })
}

const postUploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let result = await uploadSingeFile(req.files.image)
    console.log("check result: ", result)

    return res.send('ok')
}

module.exports = {
    getUsers, postNewUsers, putUpdateUsers, deleteUsers, postUploadSingleFile
}