const connection = require("../config/database")

const getAllUsers = async () => {
    let [results, fields] = await connection.query(
        'SELECT * FROM Users')
    return results
}

const getUsersbyID = async (userId) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users WHERE id = ?`, [userId],
    )
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUsersbyID = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users 
        SET email = ?, name = ?, city = ? 
        WHERE id = ?  `
        , [email, name, city, userId],
    )
}

const deleteUsersbyID = async (userId) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, [userId],
    )
}

module.exports = {
    getAllUsers, getUsersbyID, updateUsersbyID, deleteUsersbyID
}