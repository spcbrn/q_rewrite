

module.exports = {
  //routes arriving user to client route '/test' if already on session,
  //else to dm auth login page
  routeUserFromSplash: (req, res) => req.user
                                     ? res.status(200).send({ source: req.query.source_url,
                                                              user: req.user })
                                     : res.status(200).send(`/auth/devmtn`),
  //returns current session user object if one exists, else returns a string
  getSessionUser: (req, res) => res.status(200)
                                   .send( req.user
                                          ? req.user
                                          : `No user on session.` )
};
