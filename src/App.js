
import './App.css';

import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import Tos from './pages/Tos';
import Privacy from './pages/Privacy';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/privacy" component={Privacy }/>
        <Route exact path="/tos" component={Tos }/>
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
