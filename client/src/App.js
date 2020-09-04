import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import BuddyCard from './components/Card/BuddyCard'
import SenseiCard from './components/Card/SenseiCard'
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <BuddyCard />
      <SenseiCard />
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