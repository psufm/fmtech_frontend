import React, { Fragment } from "react";
import "./css/reset.css";
import "./App.css";
import Footer from "./components/res/Footer";
import IntroWord from "./components/res/IntroWord";
import Helmet from "react-helmet";

import Video from "./components/res/Video";
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
function App() {
  return (
    <Fragment>
      {
        //헤드시작
      }
      <Helmet>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>FM Technology 에프엠테크</title>

        <link rel="icon" href="./favicon/favicon.ico" type="image/x-icon" />
        {/*
        폰트
        */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://fmtech.io" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="./favicon/ms-icon-144x144.png"
        />

        {/*
        일반
        */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index,nofollow" />
        <meta name="description" content="FM Technology 에프엠테크" />
        <meta name="keywords" lang="ko" content="웹서비스, 앱서비스" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
      {
        //헤드종료
      }
      <div className="logo">
        <img src="./images/text_logo.png" alt="text_logo" />
      </div>
      <div className="contents">
        <Video />
        <div className="loginbox">
          {sessionStorage.getItem("state") !== "login" ? <Login /> : <Logout />}
        </div>
        <IntroWord />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
