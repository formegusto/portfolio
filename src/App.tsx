import React from 'react';
import { Route } from 'react-router';
import MainIntroPage from './pages/MainIntroPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <>
      <Route path="/portfolio" component={MainIntroPage} exact/>
      <Route path="/portfolio/iamformegusto" component={PortfolioPage} exact />
    </>
  )
}

export default App;
