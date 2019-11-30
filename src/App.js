import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from './components/home/Home';
import CountrySelect from './components/country-select/CountrySelect';
import Country from './components/country/Country';
import Mission from './components/mission/Mission';
import Contact from './components/contact/Contact';
import Party from './components/party/Party';
import Budget from './components/budget/Budget';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Home" exact component={Home} />
      <Route path="/Mission" exact component={Mission} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/countries" exact component={CountrySelect} />
      <Route path="/countries/:id" exact component={Country} />
      <Route path="/countries/:id/parties/:id" exact component={Party} />
      <Route path="/countries/:id/parties/:id/budget" exact component={Budget} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
