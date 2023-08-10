const { createProjectService, getProjectService, updateProjectService, deleteProjectService } = require('../services/projectService')
const Joi = require('joi');

module.exports = {
    postCreateProject: async (req, res) => {
        let result = await createProjectService(req.body)
        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            phone: Joi.string()
                .pattern(new RegExp('^[0-9]{8,11}$')),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
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

    getProject: async (req, res) => {
        let result = await getProjectService(req.query)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    updateProject: async (req, res) => {
        let result = await updateProjectService(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    deleteProject: async (req, res) => {
        let result = await deleteProjectService(req.body.id)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}