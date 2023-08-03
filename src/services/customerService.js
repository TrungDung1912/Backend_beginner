const Customer = require('../models/customer')


const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        })
        return result;
    } catch (err) {
        console.log(err)
        return null
    }
}

const createCustomersService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr)
        return result;
    } catch (err) {
        console.log(err)
        return null
    }
}

const getInfoCustomersService = async () => {
    try {
        let result = await Customer.find({})
        return result
    } catch (err) {
        console.log(err)
        null
    }
}

const putUpdateCustomerService = async (id, name, adress, email) => {
    try {
        let result = await Customer.updateOne({ id }, { name, adress, email })
        return result
    } catch (err) {
        console.log(err)
        null
    }
}

module.exports = { createCustomerService, createCustomersService, getInfoCustomersService, putUpdateCustomerService }
