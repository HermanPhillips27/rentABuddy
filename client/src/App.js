import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <>
      <Header />

        {/* <Router>
          <Switch>
            <Route exact path='/' component={} />
            <Route exact path='/home' component={} />
            <Route exact path='/buddies' component={} />
            <Route exact path='/senseis' component={} />
          </Switch>
        </Router> */}
    </>
  );
}

export default App;