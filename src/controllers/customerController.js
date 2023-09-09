const { uploadSingeFile } = require("../services/fileService")
const { createCustomerService, createCustomersService,
    getInfoCustomersService, putUpdateCustomerService,
    deleteACustomerService, deleteCustomersService } = require("../services/customerService")
const Joi = require('joi');

module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body

        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),

            address: Joi.string(),
            phone: Joi.string()
                .pattern(new RegExp('^[0-9]{8,11}$')),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            description: Joi.string(),

            // password: Joi.string()
            //     .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

            // repeat_password: Joi.ref('password'),


            // access_token: [
            //     Joi.string(),
            //     Joi.number()
            // ],

            // birth_year: Joi.number()
            //     .integer()
            //     .min(1900)
            //     .max(2013),     
        })
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(200).json({
                msg: error
            })
        } else {
            let imageURL = ""
            if (!req.files || Object.keys(req.files).length === 0) {

            } else {
                let result = await uploadSingeFile(req.files.image)
                imageURL = result.path
            }

            let customerData = {
                name, address, phone, email, description, image: imageURL
            }
            let customer = await createCustomerService(customerData)

            return res.status(200).json({
                EC: 0,
                data: customer
            })
        }
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
    },
    getInfoCustomers: async (req, res) => {
        let limit = req.query.limit
        let page = req.query.page
        let name = req.query.name
        let result = null
        if (limit && page) {
            result = await getInfoCustomersService(limit, page, name, req.query)
        } else {
            result = await getInfoCustomersService()
        }
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    putUpdateCustomer: async (req, res) => {
        let { id, name, adress, email } = req.body
        let info_update = await putUpdateCustomerService(id, name, adress, email)
        return res.status(200).json({
            EC: 0,
            data: info_update
        })
    },
    deleteACustomer: async (req, res) => {
        let { id } = req.body
        console.log(id)
        let info_delete = await deleteACustomerService(id)
        return res.status(200).json({
            EC: 0,
            data: info_delete
        })
    },
    deleteCustomers: async (req, res) => {
        let ids = req.body.customersId
        console.log(ids)
        let result = await deleteCustomersService(ids)
        return res.status(200).json({
            EC: 0,
            data: result
        })

    }
}