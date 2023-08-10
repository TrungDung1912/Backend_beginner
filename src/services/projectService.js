const Project = require('../models/project')
const aqp = require('api-query-params')


module.exports = {
    createProjectService: async (data) => {
        try {
            if (data.type === "EMPTY-PROJECT") {
                let result = await Project.create(data)
                return result
            }
            if (data.type === "ADD-USERS") {
                console.log(data)
                //find project by id
                let myProject = await Project.findById(data.projectId).exec()

                for (let i = 0; i < data.usersArr.length; i++) {
                    myProject.usersInfo.push(data.usersArr[i])
                }
                let result = await myProject.save()
                return result
            }

            if (data.type === "REMOVE-USERS") {
                console.log(data)
                //find project by id
                let myProject = await Project.findById(data.projectId).exec()

                for (let i = 0; i < data.usersArr.length; i++) {
                    myProject.usersInfo.pull(data.usersArr[i])
                }
                let result = await myProject.save()
                return result
            }
            if (data.type === "ADD-TASKS") {
                console.log(data)
                //find project by id
                let myProject = await Project.findById(data.projectId).exec()

                for (let i = 0; i < data.taskArr.length; i++) {
                    myProject.tasksInfo.push(data.taskArr[i])
                }
                let result = await myProject.save()
                return result
            }

        } catch (err) {
            console.log(err)
            return null
        }
    },
    getProjectService: async (queryString) => {
        try {
            const page = queryString.page
            const { filter, limit, population } = aqp(queryString); //API Filter 114
            delete filter.page
            let offset = (page - 1) * limit
            result = await Project.find(filter)
                .populate(population) //population to receive detail data of datatable
                .skip(offset)
                .limit(limit)
                .exec() //API Pagination 109
            return result
        } catch (err) {
            console.log(err)
            return null
        }
    },
    updateProjectService: async (data) => {
        try {
            let result = await Project.updateOne({ _id: data.id }, { ...data })
            return result
        } catch (err) {
            console.log(err)
            return null
        }
    },
    deleteProjectService: async (id) => {
        try {
            let result = await Project.deleteById(id)
            return result
        } catch (err) {
            console.log(err)
            return null
        }
    }
}

