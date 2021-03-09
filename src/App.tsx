import React from 'react';
import { Route } from 'react-router';
import IamformegustoPage from './pages/IamformegustoPage';

function App() {
  return (
    <Route path="/portfolio" component={IamformegustoPage} exact />
  )
}

export default App;
