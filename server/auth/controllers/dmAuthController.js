const User = require('./../../db/models/User');


module.exports = {
  authLogin: (jwtoken, user, done) => {
    user.roles[0] = user.roles.length
                    ? user.roles[0]
                    : {role: 'student', id: 6};
    User.findOne({email: user.email}, (err, existingUser) => {
      if (err) return done(err);
      if (existingUser) {
        // existingUser.logins.push(new Date());
        // existingUser.save(done);
        return done(null, existingUser)
      } else {
        User.create(
          {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            devMtn: {
                id: user.id,
                roles: user.roles,
                cohort_id: user.cohortId
            }
          },
          (err, newUser) => {
            if (err) return done(err);
            console.log('created user: ', newUser);
            // newUser.logins.push(new Date());
            // newUser.save();
            return done(null, newUser)
          }
        )
      }
    })
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
