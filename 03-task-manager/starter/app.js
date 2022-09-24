const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config()
//middleware
app.use(express.static('./public_starter'))
app.use(express.json());

//routes 
// app.get('/hello', (req, res) => {
//     res.send('Task Manager');
// })
app.use('/api/v1/tasks', tasks)






const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}...`))
    } catch (err) {
        console.log(err)
    }
}

start()
