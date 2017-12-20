const userCtrl = require('./controllers/restUserController');


module.exports = (app, path) => {
  app.get('/api/splash_redirect', userCtrl.routeUserFromSplash);
  app.get('/api/user/current', userCtrl.getSessionUser);

  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../dist/index.html')));
  console.log('4/5...REST module initialized');
};
