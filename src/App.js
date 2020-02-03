import React, { Fragment } from "react";
import "./App.css";
import "./css/reset.css";
import "./css/style.css";
import Footer from "./components/res/Footer";
import IntroWord from "./components/res/IntroWord";
import Helmet from "react-helmet";

function App() {
  return (
    <Fragment>
      <Helmet>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>FM Technology 에프엠테크</title>
        <link
          rel="shortcut icon"
          href="./favicon/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="./favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="./favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="./favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="./favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="./favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="./favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="./favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="./favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="./favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="./favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="./favicon/manifest.json" />
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
        {/*
        OG..?
        */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FM Technology 에프엠테크" />
        <meta property="og:title" content="FM Technology 에프엠테크" />
        <meta property="og:url" content="https://fmtech.io" />
        <meta property="og:image" content="./images/text_logo.png" />
        <meta property="og:description" content="FM Technology 에프엠테크" />
        {/*
        트위터
        */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="FM Technology 에프엠테크" />
        <meta property="twitter:url" content="https://fmtech.io" />
        <meta property="twitter:image" content="#" />
        <meta
          property="twitter:description"
          content="FM Technology 에프엠테크"
        />
      </Helmet>
      <div className="logo">
        <img src="./images/text_logo.png" alt="text_logo" />
      </div>
      <IntroWord />
      <Footer />
    </Fragment>
  );
}

export default App;
