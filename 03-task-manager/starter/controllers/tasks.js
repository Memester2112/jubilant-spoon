
const getAllItems = (req,res) => {
    res.send('get all tasks');
}
const createTask = (req,res) => {
    res.json(req.body);
}
const getTask = (req,res) => {
    res.json({id: req.params.id});
}
const updateTask = (req,res) => {
    res.send('updated task');
}
const deleteTask = (req,res) => {
    res.send('deleted task');
}




module.exports = {
    getAllItems,
    createTask,
    getTask,
    updateTask,
    deleteTask
}