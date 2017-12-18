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

const authENV = {
  appURL,
  DMAuthApp,
  DMAuthToken,
  DMAuthSecret,
  DMAuthCallback
}

//-------------APP SETUP--------------//

// app.use(express.static(`${__dirname}/dist_build`));

const session = require('express-session')
    , MongoStore = connectMongo(session)
    , userSession = session({
                      secret: sessionSecret,
                      name: 'theQCookie.sid',
                      resave: false,
                      saveUninitialized: false,
                      cookie: {maxAge: 900000},
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

//-----------------DB-----------------//

const appInitDB = async (app, mongoose, uri) => {
  mongoose.Promise = global.Promise;
  await mongoose.connect(
    uri,
    {useMongoClient: true},
    () => console.log(`1/5 - DB connection initialized: ${uri}`)
  );
};

//----------------AUTH----------------//

const appInitAuth = (app, passport, dm_strategy, env) => {
  const authModule = require('./auth/authModule');
  authModule(app, passport, dm_strategy, env);
}

//-----------------IO-----------------//

const appInitIO = (app, session, socket, port) => {
  const ioModule = require('./io/ioModule')
      , io = socket(app.listen(port, () => console.log(`5/5 - serving port ${port}`)));
  ioModule.ioSessionMiddleware(io, session);
  ioModule.addListeners(io);
};

//----------------REST----------------//

const appInitREST = app => {
  const restModule = require('./rest/restModule');
  restModule(app);
};

//-------------INITIALIZE-------------//

const initializeWebServer = async (
    app, mongoose, uri, passport, dm_strategy, env, session, socket, port
  ) => {
  await appInitDB(app, mongoose, uri);
  await appInitAuth(app, passport, dm_strategy, env)
  await appInitIO(app, session, socket, port);
  appInitREST(app);
};

initializeWebServer(
  app, mongoose, MongoURI, passport, DMStrategy, authENV, userSession, socket, port
);
