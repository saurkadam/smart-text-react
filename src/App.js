import './App.css';
import React from 'react';
import './Components/FontawesomeIcons/FontawesomeIcons'
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home'
import Case from './Components/Case/Case'
import Appbar from './Components/Appbar/Appbar'

function App() {
  return (
    <div className="App">
      <Appbar caseNumber={'F013596'} imgSrc={`${process.env.PUBLIC_URL}/logo192.png`}></Appbar>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/case" component={Case} exact />
      </Switch>
    </div>
  );
}

export default App;
