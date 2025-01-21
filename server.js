const cors = require('cors');
const express = require('express');
const app = express();
express.use(cors());
app.use(express.static('pages'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});

app.get('/north', (req, res) => {
    res.sendFile(__dirname + '/pages/north.html');
});

app.get('/north-west', (req, res) => {
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

app.get("*", (req, res) => {
    const answer = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>    
        <h1>404</h1>
        <article>
            The page you are looking for does not exist.If you want to go back to the homepage please click the button below
            <a href="/"><button>Back to Home</button></a>
        </article>
        `
    res.send(answer)
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on port 3000 at http://localhost:3000');
});
