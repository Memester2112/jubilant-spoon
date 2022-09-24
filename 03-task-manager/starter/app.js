const connectDB = require('./db/connect');
var path = require('path');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()
//middleware
app.use(express.static('./public_starter'))
app.use(express.json());

app.use('/api/v1/tasks', tasks)

const notFound = require('./middleware/not-found')
app.use(notFound)
app.use(errorHandlerMiddleware)




const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}...`))
    } catch (err) {
        console.log(err)
    }
}

start()
