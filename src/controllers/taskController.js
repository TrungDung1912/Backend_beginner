const { createTaskService, getTaskService, updateTaskService, deleteTaskService } = require('../services/taskService')

module.exports = {
    postCreateTask: async (req, res) => {
        let result = await createTaskService(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
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