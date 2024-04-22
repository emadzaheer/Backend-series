console.log("This is the starting file");

const express = require('express')  //here we have made express an object, same as: import express from "express"    //common js vs module js
const app = express()               //we'll use express using app variable
const port = 3000                   // 65535 ports  

app.get('/', (req, res) => {        //listen on port / send req and get res() 
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})