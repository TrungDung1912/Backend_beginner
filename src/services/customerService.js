const Customer = require('../models/customer')
const aqp = require('api-query-params')


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
        console.log(result)
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

const getInfoCustomersService = async (limit, page, name, queryString) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit
            const { filter } = aqp(queryString); //API Filter 114
            delete filter.page
            result = await Customer.find(filter).skip(offset).limit(limit).exec() //API Pagination 109
        } else {
            result = await Customer.find({})
        }
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

const deleteACustomerService = async (id) => {
    try {
        let result = await Customer.deleteById(id)
        return result
    } catch (err) {
        console.log(err)
        null
    }
}

const deleteCustomersService = async (arrIds) => {
    try {
        let result = await Customer.delete({ _id: { $in: arrIds } })
        return result;
    } catch (err) {
        console.log(err)
        return null
    }
}

module.exports = {
    createCustomerService, createCustomersService, getInfoCustomersService,
    putUpdateCustomerService, deleteACustomerService, deleteCustomersService
}
