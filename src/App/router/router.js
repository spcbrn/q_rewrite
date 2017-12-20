import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Test from './../views/Test';

const router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Test} />
      <Route path="/test" component={Test} />
      <Route path="*" component={ props => <div>{props.history.push('/')}</div> } />
    </Switch>
  )
}

export default router();
