import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Test from './../views/Test';

const router = () => {
  return (
    <Switch>
      <Route path="/test" component={Test} />
    </Switch>
  )
}

export default router();
