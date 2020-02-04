import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class Login extends Component {
  render = () => {
    return (
      <GoogleLogin
        clientId="568529977405-s7f89cnkohtph8tru5mhnrp3q7eeeqpd.apps.googleusercontent.com" // admin oauth 인증키.
        buttonText="Login" //메일이 있으면? 로그아웃, 없으면? 로그인
        onSuccess={this.__getUserAddressCheck} // 로그인 성공시 이동할 함수
        onFailure={this.__loginFailAlert} //실패시 이동할 함수
      />
    );
  };

  __getUserAddressCheck = res => {
    //우리회사의 계정인지..?
    res.getHostedDomain() === "fmtech.io"
      ? this.__setUserInfo(res)
      : this.__loginAnotherMail(res);
  };

  __setUserInfo = res => {
    console.log("Login Success");
    sessionStorage.setItem("state", "login");
  };

  __loginAnotherMail = res => {
    res.disconnect(); //연결을 끊어, 계정선택창이 새로 나옴.
    alert("사내 G-Suite 계정으로만 접속 가능합니다.");
  };

  __loginFailAlert = () => {
    //취소했을때
    return console.log("Canceled");
  };
}

export default Login;
