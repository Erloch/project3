import React, { Component } from 'react';
import Bucket from "./pages/Bucket";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import YourList from "./pages/YourList";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
// import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import API from "./utils/API";

class App extends Component {

  state = {
    loggedIn: false,
    username: "",
    password: "",
    confirmPassword: "",
    user: null,
    message: "",
    userID: ""
  }

  componentDidMount() {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true,
          user: user.data,
          username: user.data.user.username,
          userID: user.data.user._id
        })
      }
    })
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.login({
        username: this.state.username,
        password: this.state.password
      }).then(user => {
        console.log(user);
        if (user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          });
          console.log("log in successful");
          window.location.href = '/profile';
        }
        else if (user.data.message) {
          this.setState({
            message: user.data.message
          })
        }
      });
    }
  };

  handleLogout = event => {
    event.preventDefault();
    console.log("logout hit");
    API.logout()
      .then(user => {
        // console.log(user);
        if (!user.data.loggedIn) {
          console.log("logout successful");
          this.setState({
            loggedIn: false,
            username: "",
            password: "",
            confirmPassword: "",
            user: null,
            message: ""
          })
          console.log("This should take us to /");
          window.location.pathname = '/';
        }
        else if (user.data.message) {
          this.setState({
            message: user.data.message
          })
        }
      });

  };

  handleSignup = event => {
    event.preventDefault();
    alert("hello")
    if (this.state.username && this.state.password) {
      API.signup({
        username: this.state.username,
        password: this.state.password
      }).then(user => {
        if (user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data.user,
            username: user.data.user.user.username
          });
          console.log("log in successful");
          window.location.href = '/profile';
        } else {
          console.log("something went wrong :(")
          console.log(user.data);
          this.setState({
            message: user.data,
            password: "",
            confirmPassword: ""
          })
        }
      });
    }
  };

  render() {
    return (
      <Router>
        <>
          <Nav />
          <Switch>
            <Route exact path="/" component={Bucket}></Route>
            <Route exact path="/Buckets"
              render={(props) =>
                <Bucket {...props}
                  userID={this.state.userID}
                />} />
            <Route exact path="/Buckets/:id" component={Detail}></Route>
            <Route exact path="/YourList" component={YourList}></Route>
            <Route exact path="/signup" render={(props) =>
              <Auth {...props}
                username={this.state.username}
                loggedIn={this.state.loggedIn}
                password={this.state.password}
                handleSignup={this.handleSignup}
                user={this.state.user}
                handleInputChange={this.handleInputChange}
                handleLogin={this.handleLoggin}
                handleLogout={this.handleLogout}
                message={this.state.message}
                action="signup"
              />} />
            <Route exact path="/login" render={(props) =>
              <Auth {...props}
                username={this.state.username}
                loggedIn={this.state.loggedIn}
                password={this.state.password}
                user={this.state.user}
                handleInputChange={this.handleInputChange}
                handleLogin={this.handleLoggin}
                handleLogout={this.handleLogout}
                action="login"
              />} />
            <Route exact path="/profile"
              render={(props) =>
                <Profile {...props}
                  userID={this.state.userID}
                />} />
            <Route component={NoMatch}></Route>

          </Switch>
        </>
      </Router>

    );
  }

}
export default App;
