require('dotenv').config()
console.log("This is the starting file");
const express = require('express')  //here we have made express an object, same as: import express from "express"    //common js vs module js
const app = express()               //we'll use express using the app variable
const port = 4000                   //65535 ports in total in a normal pc  

const githubInfo = {
  "message": "Found",
  "documentation_url": "https://docs.github.com/rest"
}

app.get('/', (req, res) => {        //listen on route '/' if someone sends get req and give res() which is hello world
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('ezs twitter')
})

app.get('/login', (req, res) => {
  res.send('<h1>Login Page </h1>')
} )

app.get('/blockchain', (req, res) => {          //the server was running and this route gave error: said cannot get ... , to fix this simply restart.
  res.send('<h2>VANAR CHAIN</h3> ')
})

app.get('/githubInfo', (req, res) => {
  res.json(githubInfo)
})

app.listen(process.env.PORT, () => {                                        
  console.log(`Example app listening on port ${process.env.PORT}`) 
})