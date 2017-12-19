const userCtrl = require('./controllers/restUserController');


module.exports = app => {
  app.get('/api/splash_redirect', userCtrl.routeUserFromSplash);
  app.get('/api/user/current', userCtrl.getSessionUser);

  app.get('*', (req, res) => res.status(404).send('Request URL not found.'));
  console.log('4/5...REST module initialized');
};
