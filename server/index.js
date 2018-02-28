require('dotenv').config();

//------------DEPENDENCIES------------//

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , path = require('path')
    , passport = require('passport')
    , socket = require('socket.io')
    , mongoose = require('mongoose')
    , connectMongo = require('connect-mongo')
    , DMAuth = require('devmtn-auth')
    , DMStrategy = DMAuth.Strategy
    , services = require('./services');

const app = express();

//-----------------ENV----------------//

const port = process.env.PORT || 8003
    , app_url = process.env.REACT_APP_BASEURL
    , AdminToken = process.env.ADMIN_TOKEN
    , DMAuthApp = process.env.DM_APP
    , DMAuthToken = process.env.DM_AUTH_TOKEN
    , DMAuthSecret = process.env.DM_AUTH_SECRET
    , DMAuthCallback = process.env.DM_AUTH_CALLBACK
    , sessionSecret = process.env.DM_SESSION_SECRET
    , MongoURI = process.env.MONGO_URI
    , MongoDebug = process.env.MONGO_DEBUG;

const appENV = {
  port,
  app_url,
  DMAuthApp,
  DMAuthToken,
  DMAuthSecret,
  DMAuthCallback
};

//-------------APP SETUP--------------//

// app.use(express.static(`${__dirname}/dist_build`));

const session = require('express-session')
    , MongoStore = connectMongo(session)
    , userSession = session({
                      secret: sessionSecret,
                      name: 'theQCookie.sid',
                      resave: false,
                      saveUninitialized: false,
                      cookie: {maxAge: 6.048e+8},
                      store: new MongoStore({
                                   collection: 'connect-mongoSessions',
                                   autoRemove: 'native',
                                   mongooseConnection: mongoose.connection
                                 })
                    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(cors());
app.use(userSession);
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  return req.session ? next() : next(new Error('server not ready!'))
});

//---------INITIALIZE SERVER----------//

const initialize_web_server = async (
    { app, mongoose, db_uri, passport, dm_strategy, app_env, session, socket, path, services }
  ) => {
    const {

      //-----------MONGO DATABASE-----------//

      load_app_module_db,

      //----------------AUTH----------------//

      load_app_module_auth,

      //-------------SOCKET IO--------------//

      load_app_module_io,

      //----------------REST----------------//

      load_app_module_rest

    } = services.init;
  await load_app_module_db(mongoose, db_uri);
  await load_app_module_auth(app, passport, dm_strategy, app_env);
  await load_app_module_io(app, session, socket, app_env);
  load_app_module_rest(app, path);
};

//----------------START---------------//

initialize_web_server(
  { app, mongoose, MongoURI, passport, DMStrategy, appENV, userSession, socket, path, services }
);
