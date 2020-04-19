import React, { useState } from 'react';
import "./styles.css";
import Home from './pages/home.jsx';
import Details from './pages/details.jsx';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

function App()
{
  return (

    <Router>
      <Switch>
        <Route component={Home} exact={true} path='/' />
        <Route component={Details} path='/details' />
      </Switch>

    </Router>

  );
}

export default App;
