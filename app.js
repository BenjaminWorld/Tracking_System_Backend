const express = require('express')
const app = express()

const taskRoutes = require('./routes/taskRoutes')

// const abc = new taskRoutes
// app.use('/task', taskRoutes);

app.use('/task', taskRoutes);

// app.use('/', (req, res) => {
//     res.send('Hello World')
// })

// app.use('/task', taskRoutes);


app.listen(3001)