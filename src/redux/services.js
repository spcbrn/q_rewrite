const services = {
  combineControllers: (controllers) => {
    let combined = {};
    Object.keys(controllers).forEach(c => {
      for (let k in controllers[c]) {
        combined[k] = controllers[c][k];
      }
    })
    return combined;
  },
  preCombineReducers: (reducers) => {
    let combined = {};
    Object.keys(reducers).forEach(c => {
      for (let k in reducers[c]) {
        combined[k] = reducers[c][k];
      }
    })
    console.log(reducers)
    return combined;
  }
}

export default services;
