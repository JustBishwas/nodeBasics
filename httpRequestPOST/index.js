const https = require('https');
require('dotenv').config();

const data = JSON.stringify({
    'todo' : 'Buy a milk'
})


const options = {
    hostname : 'whatever.com',
    port : process.env.PORT ,
    path : '/todos',
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json',
        'Content-Length' : data.length 
    }
}

const req = https.request(options,(res) => {
    console.log(`StatusCode : ${res.statusCode}`)

    res.on('data',d => {
        process.stdout.write(d)
    })
})

req.on('error',error => {
    console.log(error)
})

req.write(data)
req.end();

