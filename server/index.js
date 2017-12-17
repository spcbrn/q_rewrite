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

//----------------AUTH----------------//

app.get('/auth/devmtn', passport.authenticate('devmtn'));
app.get('/auth/devmtn/callback',
        (req, res, next) => {
          next();
        },
        passport.authenticate(
          'devmtn',
          {failureRedirect: `${appURL}/`}
        ), (req, res) => res.redirect(`${appURL}/home`)
);
app.get('/auth/devmtn/logout', DMStrategy.clearJwtAuthCookie, (req, res) => {
  req.logout();
  res.redirect(`${appURL}/`);
});

passport.serializeUser((user, done) => {
  done(null, user)
});
passport.deserializeUser((user, done) => {
  done(null, user)
});

passport.use('devmtn',
             new DMStrategy({
               app: DMAuthApp,
               client_token: DMAuthToken,
               callbackURL: DMAuthCallback,
               jwtSecret: DMAuthSecret
             },
             (jwtoken, user, done) => {
               user.roles[0] = user.roles.length
                               ? user.roles[0]
                               : {role: 'student', id: 6};
               done(null, user)
             }));


//----------------REST----------------//

const appInitREST = app => {
  const restModule = require('./rest/restModule');
  restModule(app);
};

//-----------------IO-----------------//

const appInitIO = (app, session, socket, port) => {
  const ioModule = require('./io/ioModule')
      , io = socket(app.listen(port, () => console.log(`serving port ${port}`)))
      , db = 'db';
  ioModule.ioSessionMiddleware(io, session);
  ioModule.addListeners(io, db);
};

//-----------------DB-----------------//

const appInitDB = async (app, mongoose, uri) => {
  mongoose.Promise = global.Promise;
  await mongoose.connect(
    uri,
    {useMongoClient: true},
    () => console.log(`connected to MongoDB: ${uri}`));
};

//-------------INITIALIZE-------------//

const initializeWebServer = async (app, session, socket, port, mongoose, uri) => {
  await appInitDB(app, mongoose, uri);
  await appInitIO(app, session, socket, port);
  appInitREST(app);
}

initializeWebServer(app, userSession, socket, port, mongoose, MongoURI);
