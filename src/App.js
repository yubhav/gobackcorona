import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <India />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
