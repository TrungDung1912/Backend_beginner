const Task = require('../models/task')
const aqp = require('api-query-params')


module.exports = {
    createTaskService: async (data) => {
        try {
            if (data.type === "EMPTY-TASK") {
                let result = await Task.create(data)
                return result
            }
            // if (data.type === "ADD-USERS") {
            //     console.log(data)
            //     //find project by id
            //     let myProject = await Project.findById(data.projectId).exec()

            //     for (let i = 0; i < data.usersArr.length; i++) {
            //         myProject.usersInfo.push(data.usersArr[i])
            //     }
            //     let result = await myProject.save()
            //     return result
            // }
            // if (data.type === "REMOVE-USERS") {
            //     console.log(data)
            //     //find project by id
            //     let myProject = await Project.findById(data.projectId).exec()

            //     for (let i = 0; i < data.usersArr.length; i++) {
            //         myProject.usersInfo.pull(data.usersArr[i])
            //     }
            //     let result = await myProject.save()
            //     return result
            // }
        } catch (err) {
            console.log(err)
            return null
        }
    },
    getTaskService: async (queryString) => {
        try {
            const page = queryString.page
            const { filter, limit } = aqp(queryString); //API Filter 114
            delete filter.page
            let offset = (page - 1) * limit
            result = await Task.find(filter)
                .skip(offset)
                .limit(limit)
                .exec() //API Pagination 109
            return result
        } catch (err) {
            console.log(err)
            return null
        }
    },
    updateTaskService: async (data) => {
        try {
            let result = await Task.updateOne({ _id: data.id }, { ...data })
            return result
        } catch (err) {
            console.log(err)
            return null
        }
    },
    deleteTaskService: async (id) => {
        try {
            let result = await Task.deleteById(id)
            return result
        } catch (err) {
            console.log(err)
            return null
        }
    }
}

