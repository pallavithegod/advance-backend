const express = require('express')

const app = express()

const entity = [];

app.use(express.json())

app.post('/mydatabase', (req, res) =>{
    entity.push(req.body)             // takes input from postman ie frontend
    
    res.status(201).json({
        message: "instance created successfully"
    })

    console.log(req.body)
})

app.get("/mydatabase", (req, res) => {     //prints on frontend
    res.status(200).json({
        entity: entity,
        message: "records printed successfully"
    })
})

// doesn't delete the index, only makes the object = null
app.delete("/mydatabase/:index", (req, res) => {   //index is var (dynamic)

    const index = req.params.index
    delete entity[index]

    res.status(200).json({
        message: "record deleted successfully"
    })
})

app.patch("/mydatabase/:index", (req, res) => {
    const index = req.params.index
    const description = req.body.age

    entity[index].age = description
   
    res.status(201).json({
        message: "instance changed in server successfully"
    })
})

module.exports = app;