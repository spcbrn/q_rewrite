
module.exports = (app) => {
  app.get('*', (req, res) => res.status(200).send('You\'ve done it!'));
}
