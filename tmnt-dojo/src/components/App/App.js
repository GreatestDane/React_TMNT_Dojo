import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../elements/Header/Header";
import Home from '../Home/Home';
import Mikey from '../elements/Mikey/Mikey';


function App() {
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/mikey" component={Mikey} exact />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  )
}

export default App;
