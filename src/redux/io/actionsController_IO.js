const actionsControllerIO = {
  joinRoom: id => { return {type: 'server/join room', data: id} },
  leaveRoom: id => { return {type: 'server/leave room', data: id} },
  setCohort: id => { return {type: 'server/set cohort', data: id} }
};

export default actionsControllerIO;
