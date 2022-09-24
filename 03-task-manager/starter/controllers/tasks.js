const Task = require('../models/Task');
const { options } = require('../routes/tasks');
const asyncWrapper = require('../middleware/async')
const { createCustomeError } = require('../errors/custom-errors')

const getAllItems = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ success: true, data: { tasks, nbHits: tasks.length } })
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task });
})

const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return next(createCustomeError(`No task with id = ${taskID}`, 404))
    }
    res.status(200).json({ task });
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
        return next(createCustomeError(`No task with id = ${taskID}`, 404))
    }
    res.status(200).json({ task: task });

})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true, runValidators: true
    })
    if (!task) {
        return next(createCustomeError(`No task with id = ${taskID}`, 404))
    }
    res.status(200).json({ task })
})



module.exports = {
    getAllItems,
    createTask,
    getTask,
    updateTask,
    deleteTask
}