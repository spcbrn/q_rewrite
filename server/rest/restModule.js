
module.exports = (app) => {
  app.get('*', (req, res) => res.status(200).send('You\'ve done it!'));
  app.get('/auth/me', (req, res) => res.status(200)
                                       .send(req.user
                                             ? req.user
                                             : 'No user on session.'));

  console.log('4/5 - REST endpoints initialized');
}
