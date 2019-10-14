const port = 8080
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/CRM', { useNewUrlParser: true })
const Client = require('./clientsSchema')

// const data = require('./data.json')
// for(let d of data){
//     let newClient = new Client(d)
//     newClient.save()
}
//helps with the post request-Client&Server ping pong
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//allows me in react to make an interaction between fronted and backend
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.get('/clients', function (req, res) {
    Client.find({}).exec(function (err, data) {
        console.log('a get has been made')
        res.send(data)
    })
})

app.put('/update/:email', function (req, res) {
    const email = req.params.email
    Client.find({ email: email }).exec(function (err, updateClient) {
        updateClient[0].name = req.body.name
        updateClient[0].country = req.body.country
        updateClient[0].save()
    })
    res.end()
})

app.post('/addClient', function (req, res) {
    let newClient = req.body
    let c = new Client(newClient)
    c.save()
    res.end()
})

app.put('/updateClient', function (req, res) {
    let data = req.body
    console.log(data)
    Client.findOne({name: data.name}).exec(function (err, updateClient){
        updateClient[data.key] = data.value
        console.log(data.key)
        updateClient.save()
    })
    res.end()
})

app.listen(port, function () {
    console.log("server is running on port " + port)
})