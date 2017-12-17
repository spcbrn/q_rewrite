
module.exports = (app) => {
  console.log('client REST endpoints initialized');

  app.get('*', (req, res) => res.status(200).send('You\'ve done it!'));
}
