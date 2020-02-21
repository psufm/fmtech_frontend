import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";

class Logout extends Component {
  render = () => {
    return (
      <GoogleLogout
        clientId="568529977405-s7f89cnkohtph8tru5mhnrp3q7eeeqpd.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={this.__logout}
        onFailure={this.__fail}
      />
    );
  };
  __fail = () => {
    console.log("왜이럼?");
  };

  __logout = () => {
    sessionStorage.setItem("state", "logout");
    console.log("Logout Success");
    alert("로그아웃 되셨습니다.");

    const property = this.props.state;

    property();
  };
}

export default Logout;
