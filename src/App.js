import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import shopPage from './pages/shop/shop.component'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={shopPage}/>
      </Switch>
    </div>
  );
}

export default App;
