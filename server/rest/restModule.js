
module.exports = (app) => {
  app.get('/auth/me', (req, res) => res.status(200)
                                       .send(req.user
                                             ? req.user
                                             : 'No user on session.'));

  app.get('*', (req, res) => res.status(404).send('Invalid request.'));
  console.log('4/5 - REST endpoints initialized');
}
