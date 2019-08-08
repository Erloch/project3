import React from 'react';
import Bucket from "./pages/Bucket";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import YourList from "./pages/YourList";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

// import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Feed from "./pages/Feed";


function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Bucket}></Route>
          <Route exact path="/Buckets" component={Bucket}></Route>
          <Route exact path="/Buckets/:id" component={Detail}></Route>
          <Route exact path = "/YourList" component = {YourList}></Route>
          <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
          <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
          <Route exact path="/profile" component={Profile} />
         <Route exact path = "/Feed" component = {Feed} />
          <Route component={NoMatch}></Route>

        </Switch>
      </>
    </Router>

  );
}

export default App;
