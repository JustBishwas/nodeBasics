const axios = require('axios')
const express = require('express')

const app = express();
require('dotenv').config();

axios.post('https://whatever.com/todos',{
    todo : 'Task is here'
})
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(bodyParser.json())
app.post('/endpoint',(req,res)=>{
    console.log(req.body.todo);
    console.log(res)
})

