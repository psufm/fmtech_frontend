import React, { Fragment, Component } from "react";
import "./css/reset.css";
import "./App.css";
import Footer from "./components/res/Footer";
import IntroWord from "./components/res/IntroWord";

import Video from "./components/res/Video";
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
import Header from "./components/res/Header";

class App extends Component {
  state = {
    a: "a"
  };

  componentDidMount() {}

  render() {
    return this.__setDefaultMainView();
  }

  __handleTest() {}

  __setDefaultMainView() {
    return (
      <Fragment>
        <Header></Header>
        <div className="logo">
          <img src="./images/text_logo.png" alt="text_logo" />
        </div>
        <div className="contents">
          <Video />
          <div className="loginbox">
            {sessionStorage.getItem("state") !== "login" ? (
              <Login />
            ) : (
              <Logout />
            )}
          </div>
          <IntroWord />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
