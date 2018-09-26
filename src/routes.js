import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import SerialsPage from './Components/SerialsPage/SerialsPage';
import SerialPage from './Components/SerialPage/SerialPage';

const Routes = () => (
    <div>
      <Route exact path='/' render={(props) => <App {...props} />} />
      <Route path='/serials' render={(props) => <SerialsPage {...props} />} />
      <Route path='/serials/:id' render={(props) => <SerialPage {...props} />} />
    </div>
  );

export default Routes;
