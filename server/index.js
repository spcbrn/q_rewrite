require('dotenv').config();

const express = require('express')
    , port = process.env.PORT;

const app = express();



app.get('*', (req, res) => res.status(200).send('You\'ve done it!'));

app.listen(port, () => console.log(`serving port ${port}`));
