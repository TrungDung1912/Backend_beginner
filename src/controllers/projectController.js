const { createProjectService, getProjectService, updateProjectService, deleteProjectService } = require('../services/projectService')

module.exports = {
    postCreateProject: async (req, res) => {
        let result = await createProjectService(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
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