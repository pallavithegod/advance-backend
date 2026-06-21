const app = require("./src/app.js")

app.listen(3000, ()=>{
    console.log("started")
})

app.get("/", (req, res) => {
    res.send("HI, SENT TO FRONTEND'S LANDING PAGE")
})

