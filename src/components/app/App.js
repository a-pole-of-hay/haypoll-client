import React from 'react';
import PollFormContainer from '../../containers/PollFormContainer';
import AllPolls from '../../containers/AllPolls';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/create-poll" component={PollFormContainer} />
        <Route exact path="/" component={AllPolls} />
      </Switch>
    </Router>
  );
}
