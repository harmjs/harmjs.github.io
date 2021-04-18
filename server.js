const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

app.use(express.static('dist'));
app.get('*', (req, res) => 
{
    console.log(req.path);
    res.sendFile(__dirname + '/dist/index.html')
});

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
