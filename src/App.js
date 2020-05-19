import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
  );
  }

export default App;
