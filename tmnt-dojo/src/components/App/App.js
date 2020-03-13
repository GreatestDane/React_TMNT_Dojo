import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../elements/Header/Header";
import Home from '../Home/Home';
import Mikey from '../elements/Mikey/Mikey';
import Raph from '../elements/Raph/Raph';
import Don from '../elements/Don/Don';
import Leo from '../elements/Leo/Leo';


function App() {
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/mikey" component={Mikey} exact />
            <Route path="/raph" component={Raph} exact />
            <Route path="/don" component={Don} exact />
            <Route path="/leo" component={Leo} exact />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  )
}

export default App;
