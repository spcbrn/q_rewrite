import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Test from './../views/Test';

const router = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <h1>studentq</h1>} />
      <Route path="/test" component={Test} />
      <Route path="/studentq" render={() => <h1>/studentq</h1>} />
      <Route path="/admin/dashboard" render={() => <h1>/admin/dashboard</h1>} />
      <Route path="/admin/q_preferences" component={() => <h1>/admin/q_preferences</h1>} />
    </Switch>
  )
}

export default router();
