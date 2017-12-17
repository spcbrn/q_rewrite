


module.exports = {
  authLogin: (jwtoken, user, done) => {
    user.roles[0] = user.roles.length
                    ? user.roles[0]
                    : {role: 'student', id: 6};
    done(null, user)
  },
  authLogout: (req, res, appURL) => {
    req.logout();
    return res.redirect(`${appURL}/`);
  },
  successRedirect: (req, res, appURL) => {
    return res.redirect(`${appURL}/home`)
  },
  serializeUser: (user, done) => {
    return done(null, user);
  },
  deserializeUser: (user, done) => {
    return done(null, user);
  }
};
