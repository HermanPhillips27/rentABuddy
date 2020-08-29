import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Card from './components/Card/Card'
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Card />
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