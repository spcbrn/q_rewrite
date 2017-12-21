

module.exports = {
  //checks if use has an ongoing passport session.  if so, sends back the user object,
  //and if not, routes them to the dm auth login and passes their source path along for the redirect
  routeUserFromSplash: (req, res) => req.user
                                     ? res.status(200).send(req.user)
                                     : res.status(200).send(`/auth/devmtn?src_=${req.query.src_}`),
  //returns current session user object if one exists, else returns a string
  getSessionUser: (req, res) => res.status(200)
                                   .send( req.user
                                          ? req.user
                                          : `No user on session.` )
};
