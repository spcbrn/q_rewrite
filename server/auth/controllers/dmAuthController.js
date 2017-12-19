const User = require('./../../db/models/User');


module.exports = {
  authLogin: (jwtoken, user, done) => {
    user.roles[0] = user.roles.length
                    ? user.roles[0]
                    : {role: 'student', id: 6};
    User.findOne({email: user.email}, (err, existing_q_user) => {
      if (err) return done(err);
      if (existing_q_user) {
        // existing_q_user.logins.push(new Date());
        // existing_q_user.save(done);
        return done(null, existing_q_user)
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
          (err, new_q_user) => {
            if (err) return done(err);
            console.log('created new user: ', new_q_user);
            // new_q_user.logins.push(new Date());
            // new_q_user.save();
            return done(null, new_q_user)
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
    return res.redirect(`${appURL}/test`)
  },
  serializeUser: (q_user, done) => {
    return done(null, q_user);
  },
  deserializeUser: (q_user, done) => {
    User.findOne({_id: q_user._id}, (err, q_user) => {
      if (err) return done(err);
      return done(null, q_user)
    })
  }
};
