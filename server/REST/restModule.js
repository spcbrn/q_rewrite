
module.exports = (app) => {
  console.log('4/5 - REST endpoints initialized');

  app.get('*', (req, res) => res.status(200).send('You\'ve done it!'));
}
