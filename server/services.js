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
          load_app_module_io: (app, session, socket, port) => {
            const ioModule = require('./io/ioModule')
                , io = socket(app.listen(port, () => console.log(`5/5...serving listening on port ${port}`)));
            ioModule.ioSessionMiddleware(io, session);
            ioModule.addListeners(io);
          },
          load_app_module_rest: (app, env) => {
            const restModule = require('./rest/restModule');
            restModule(app, env);
        }
  }
};
