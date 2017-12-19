import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Splash from './../views/Splash';
import Test from './../views/Test';

const router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route path="/test" component={Test} />
    </Switch>
  )
}

export default router();
