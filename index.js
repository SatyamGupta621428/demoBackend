require('dotenv').config() // load all the environment variables
const express = require('express');

const app = express(); // assure app is something like Math and then we can use Math.pow, Math.sqrt and etc.

const PORT = 3000

//Define a simple route

app.get('/', (req,res)=>{
    res.send('<h1>Please login first</h1>')
})

//start the server

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
