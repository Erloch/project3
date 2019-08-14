import React, { Component } from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
// import API from "../../../../../project3/client/src/utils/API";
import "./Auth.scss";




function Auth(props) {

  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleLogin = event => {
  //   event.preventDefault();
  //   if (this.state.username && this.state.password) {
  //     API.login({
  //       username: this.state.username,
  //       password: this.state.password
  //     }).then(user => {
  //       console.log(user);
  //       if (user.data.loggedIn) {
  //         this.setState({
  //           loggedIn: true,
  //           user: user.data.user
  //         });
  //         console.log("log in successful");
  //         window.location.href = '/profile';
  //       }
  //       else if (user.data.message) {
  //         this.setState({
  //           message: user.data.message
  //         })
  //       }
  //     });
  //   }
  // }

  // handleSignup = event => {
  //   event.preventDefault();
  //   if (this.state.username && this.state.password) {
  //     API.signup({
  //       username: this.state.username,
  //       password: this.state.password
  //     }).then(user => {
  //       if (user.data.loggedIn) {
  //         this.setState({
  //           loggedIn: true,
  //           user: user.data.user
  //         });
  //         console.log("log in successful");
  //         window.location.href = '/profile';
  //       } else {
  //         console.log("something went wrong :(")
  //         console.log(user.data);
  //         this.setState({
  //           message: user.data
  //         })
  //       }
  //     });
  //   }
  // }


  return (
    <div id="background">
        <br></br>
        
      <div className="authBox">

        {(props.action === "login") ? (
          <Login
            username={props.username}
            password={props.password}
            handleLogin={props.handleLogin}
            handleInputChange={props.handleInputChange}
            loggedIn={props.loggedIn}
            handleLogout={props.handleLogout}
            message={props.message}
          />
        ) : (
            <Signup
              username={props.username}
              password={props.password}
              confirmPassword={props.confirmPassword}
              handleSignup={props.handleSignup}
              handleInputChange={props.handleInputChange}
              message={props.message}
            />
          )}
      </div>
    </div>
  )

}



export default Auth;