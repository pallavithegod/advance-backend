const express = require('express')

const app = express()

const entity = [];

app.use(express.json())

app.post('/database', (req, res) =>{
    entity.push(req.body)             // takes input from postman
    
    res.status(201).json({
        message: "instance created successfully"
    })

    console.log(req.body)
})

app.get("/database", (req, res) => {
    res.status(200).json({
        entity: entity,
        message: "records printed successfully"
    })
})

module.exports = app;