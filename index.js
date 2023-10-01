var express = require('express')

const SERVER_PORT = 8089
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//http://localhost:8089/
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/plan")
    res.status(201).send("Welcome to Express Web Server")

    // res.send("<h1>Welcome to Express Web Server</h1>")

    //res.end("<h1>Welcome to Express Web Server</h1>")
})

//http://localhost:8089/student
app.get("/student", (req, res) => {
    const stud = {
        sid: 1,
        snm: "Pritesh Patel",
        method: "GET"
    }

    res.send(stud)
})

//http://localhost:8089/student
app.post("/student", (req, res) => {
    const stud = {
        sid: 1,
        snm: "Pritesh Patel",
        method: "POST",
        header: req.headers
    }

    res.send(stud)
})

//http://localhost:8089/faculty
app.get("/faculty", (req, res) => {
    res.send("Hello Faculty")
})

//PATH Parameter
//http://localhost:8089/employee/pritesh/patel
app.get("/employee/:fname/:lname", (req, res) => {
    const data = req.params
    let fnm = req.params.fname
    let lnm = req.params.lname
    //let city = req.params.city
    res.send(data)
})

//Query parameter
//http://localhost:8089/employee?fnm=pritesh&lnm=patel
app.get("/employee", (req, res) => {
    const data = req.query
    if(data.id === undefined){
        res.send("Required id as a query param")
    }else{
        res.send(data)
    }
})


//Aceept data as body
//http://localhost:8089/hotels
    app.get("/hotels", (req, res) => {
    const data = req.body
    res.send(data)
})

app.listen(SERVER_PORT, ()=> {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})


