require('dotenv').config();

//----------------DEPS----------------//

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , path = require('path')
    , passport = require('passport')
    , socket = require('socket.io')
    , mongoose = require('mongoose')
    , connectMongo = require('connect-mongo')
    , DMAuth = require('devmtn-auth')
    , DMStrategy = DMAuth.Strategy;

const app = express();

//---------------CONFIG---------------//

const port = process.env.PORT || 8003
    , appURL = process.env.REACT_APP_BASEURL
    , AdminToken = process.env.ADMIN_TOKEN
    , DMAuthApp = process.env.DM_APP
    , DMAuthToken = process.env.DM_AUTH_TOKEN
    , DMAuthSecret = process.env.DM_AUTH_SECRET
    , DMAuthCallback = process.env.DM_AUTH_CALLBACK
    , sessionSecret = process.env.DM_SESSION_SECRET
    , MongoURI = process.env.MONGO_URI
    , MongoDebug = process.env.MONGO_DEBUG;


//------------CONTROLLERS-------------//



//-------------APP SETUP--------------//

// app.use(express.static(`${__dirname}/dist_build`));

const session = require('express-session')({
  secret: sessionSecret,
  name: 'theQCookie.sid',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24},
  store: sessionStore
});

const MongoStore = connectMongo(session);
const SessionStore = new MongoStore({
  collection: 'connect-mongoSessions',
  autoRemove: 'native',
  mongooseConnection: mongoose.connection
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(cors());
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

//----------------AUTH----------------//



//----------------REST----------------//

app.get('*', (req, res) => res.status(200).send('You\'ve done it!'));

app.listen(port, () => console.log(`serving port ${port}`));
