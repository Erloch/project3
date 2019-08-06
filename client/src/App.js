import React from 'react';
import Bucket from "./pages/Bucket";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <>
      <Nav />
      <Switch>
        <Route exact path = "/" component = {Bucket}></Route>
        <Route exact path = "/Bucket" component = {Bucket}></Route>
        <Route exact path = "/Bucket/:id" component = {Detail}></Route>
        <Route component = {NoMatch}></Route>
    
      </Switch>
      </>
    </Router>
   
  );
}

export default App;
