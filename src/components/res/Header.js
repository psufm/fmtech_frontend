import React from "react";
import Helmet from "react-helmet";

function Header() {
  return (
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
  );
}

export default Header;
