const { createTaskService, getTaskService, updateTaskService, deleteTaskService } = require('../services/taskService')
const Joi = require('joi');

module.exports = {
    postCreateTask: async (req, res) => {
        let result = await createTaskService(req.body)
        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            status: Joi.string(),
            description: Joi.string(),
        })
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(200).json({
                msg: error
            })
        } else {
            return res.status(200).json({
                EC: 0,
                data: result
            })
        }
    },

    getTask: async (req, res) => {
        let result = await getTaskService(req.query)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    updateTask: async (req, res) => {
        let result = await updateTaskService(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    deleteTask: async (req, res) => {
        let result = await deleteTaskService(req.body.id)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}