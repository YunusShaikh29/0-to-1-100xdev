// use cases of middleware (assignment) =
// 1. Count the number of requests

const express = require('express');
// const { cp } = require('fs')

const app = express()

app.use(express.json())

let count = 0;

const counterMiddleware = (req, res, next) => {
    count = count + 1;
    next()
}

app.get('/', counterMiddleware, function(req, res){
    res.json({count: `this the ${count}th number of request on our server`})
})

// app.listen(7000, () => {
//     console.log('server is listening on port 7000')
// })  