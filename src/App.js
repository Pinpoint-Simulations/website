
import './App.css';

import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import Updates from './pages/Updates'
import Contributions from './pages/Contributions';
import Downloads from './pages/Downloads';
import Tos from './pages/Tos';
import Privacy from './pages/Privacy';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/updates" component={Updates }/>
        <Route exact path="/downloads" component={Downloads }/>
        <Route exact path="/privacy" component={Privacy }/>
        <Route exact path="/tos" component={Tos }/>
        <Route path='/discord' component={() => { 
          window.location.href = 'https://discord.gg/pinpoint'; 
          return null;
        }}/>
        <Route exact path="/contributions" component={Contributions }/>
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
