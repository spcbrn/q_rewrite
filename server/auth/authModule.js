
module.exports = (app, passport, DM_Strategy, env) => {
  const authCtrl = require('./controllers/authController');

  app.get('/auth/devmtn',
    authCtrl.addSourcePathToSession,
    passport.authenticate('devmtn'));

  app.get('/auth/devmtn/callback',
    passport.authenticate('devmtn', {failureRedirect: `${env.app_url}/`}),
    (req, res) => authCtrl.successRedirect(req, res, env.app_url));

  app.get('/auth/devmtn/logout',
    DM_Strategy.clearJwtAuthCookie,
    (req, res) => authCtrl.authLogout(req, res, env.app_url));

  passport.serializeUser(authCtrl.serializeUser);
  passport.deserializeUser(authCtrl.deserializeUser);

  passport.use('devmtn',
    new DM_Strategy(
      {
        app: env.DMAuthApp,
        client_token: env.DMAuthToken,
        callbackURL: env.DMAuthCallback,
        jwtSecret: env.DMAuthSecret
      },
      authCtrl.authLogin
    )
  );

  console.log('2/5...auth module initialized');
};
