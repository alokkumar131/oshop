const express=require('express');
const bodyParser=require('body-parser');
const path =require('path');
//Set Port
const port=process.env.PORT | 3000;
// API file for interacting with MongoDB
const api = require('./server/routes/api');
var app=express();
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port,(req,res)=>{
    console.log('Server started on port number :'+port)
})