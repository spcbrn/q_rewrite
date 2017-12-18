
module.exports = (app) => {
  app.get('*', (req, res) => res.status(200).send('You\'ve done it!'));

  console.log('4/5 - REST endpoints initialized');
}
