module.exports = {
  init: {
          load_app_module_db: async (mongoose, uri) => {
            const dbModule = require('./db/dbModule');
            await dbModule(mongoose, uri);
          },
          load_app_module_auth: (app, passport, dm_strategy, env) => {
            const authModule = require('./auth/authModule');
            authModule(app, passport, dm_strategy, env);
          },
          load_app_module_io: async (app, session, socket, env) => {
            const ioModule = require('./io/ioModule')
                , io = await socket(app.listen(env.port, () => console.log(`5/5...server listening on port ${env.port}`)));
            ioModule.ioSessionMiddleware(io, session);
            ioModule.addListeners(io);
          },
          load_app_module_rest: (app, path) => {
            const restModule = require('./rest/restModule');
            restModule(app, path);
          }
    },
  user: {
          set_permissions: (dm_roles) => {
            let adminRoles = {2: 'admin', 3: 'mentor', 4: 'lead-inst', 7: 'inst'};
            let isAdmin = dm_roles.filter(c => adminRoles[c.id] ? adminRoles[c.id] : false);
            return isAdmin.length > 0 ? 'admin' : 'student';
          }
        }
};
