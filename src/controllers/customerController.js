const { uploadSingeFile } = require("../services/fileService")
const { createCustomerService, createCustomersService } = require("../services/customerService")

module.exports = {

    postCreateCustomer: async (req, res) => {
        let { name, adress, phone, email, description } = req.body
        let imageURL = ""
        if (!req.files || Object.keys(req.files).length === 0) {

        } else {
            let result = await uploadSingeFile(req.files.image)
            imageURL = result.path
        }

        let customerData = {
            name, adress, phone, email, description, image: imageURL
        }
        let customer = await createCustomerService(customerData)

        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    postCreateCustomers: async (req, res) => {
        let customers = await createCustomersService(req.body.customers)
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers
            })
        }
    }
}