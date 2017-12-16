require('dotenv').config();

//----------------DEPS----------------//

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , path = require('path');

//------------CONTROLLERS-------------//


const port = process.env.PORT;

const app = express();



app.get('*', (req, res) => res.status(200).send('You\'ve done it!'));

app.listen(port, () => console.log(`serving port ${port}`));
