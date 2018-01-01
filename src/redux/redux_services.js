const redux_services = {
  combineActionControllers: controllers => {
    let combined = {};
    Object.keys(controllers).forEach(c => {
      for (let k in controllers[c]) {
        combined[k] = controllers[c][k];
      }
    })
    return combined;
  },
  preCombineReduxReducers: reducers => {
    let combined = {};
    Object.keys(reducers).forEach(c => {
      for (let k in reducers[c]) {
        combined[k] = reducers[c][k];
      }
    })
    return combined;
  }
};

export default redux_services;
