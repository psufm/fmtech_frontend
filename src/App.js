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

  render = () => {
    return this.__setDefaultMainView();
  };

  __handleTest = userdata => {
    this.setState(userdata);
  };

  __handleStateDelete = () => {
    this.setState({
      a: "a"
    });
  };

  __setDefaultMainView = () => {
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
              <Login state={this.__handleTest} />
            ) : (
              <Logout state={this.__handleStateDelete} />
            )}
          </div>
          <IntroWord />
        </div>
        <Footer />
      </Fragment>
    );
  };
}

export default App;
