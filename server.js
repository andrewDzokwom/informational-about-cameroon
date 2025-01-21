/*************  ✨ Codeium Command ⭐  *************/
const express = require('express');
const app = express();
app.use(express.static('pages'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});

app.get('/north', (req, res) => {
    res.sendFile(__dirname + '/pages/north.html');
});

app.get('/northwest', (req, res) => {
    res.sendFile(__dirname + '/pages/north-west.html');
});

app.get('/west', (req, res) => {
    res.sendFile(__dirname + '/pages/west.html');
});

app.get('/south-west', (req, res) => {
    res.sendFile(__dirname + '/pages/south-west.html');
});

app.get('/littoral', (req, res) => {
    res.sendFile(__dirname + '/pages/littpral.html');
});

app.get('/centre', (req, res) => {
    res.sendFile(__dirname + '/pages/centre.html');
});

app.get('/east', (req, res) => {
    res.sendFile(__dirname + '/pages/east.html');
});

app.get('/south', (req, res) => {
    res.sendFile(__dirname + '/pages/south.html');
});

app.get('/far-north', (req, res) => {
    res.sendFile(__dirname + '/pages/far-north.html');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000 at http://localhost:3000');
});
