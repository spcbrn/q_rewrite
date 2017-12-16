require('dotenv').config();

const express = require('express')
    , port = process.env.PORT;

const app = express();



app.listen(port, () => console.log(`serving port ${port}`));
