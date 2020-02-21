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
        prompt="select_account"
        cookiePolicy="single_host_origin"
        onRequest={this.__test}
        redirectUri="/api"
      />
    );
  };

  __test() {
    console.log("begin");
  }

  __getUserAddressCheck = res => {
    //우리회사의 계정인지..?
    res.getHostedDomain() === "fmtech.io"
      ? this.__setUserInfo(res)
      : this.__loginAnotherMail(res);
  };

  __setUserInfo = res => {
    sessionStorage.setItem("state", "login"); //연결고리
    //만약, 기존에 있는 정보라면.. 바로 메인페이지로 이동해서 해당 회원 정보를 띄우고
    //처음 오는 사람일경우, 가입을 시켜야함으로..-> 회원가입 페이지로 이동을 해야함.
    //res에 들어온 정보 중, token key등의정보를 몽고db에 저장을 해야함.
    //그 후 메인페이지로 이동한다.
    this.setState({
      key: JSON.stringify(res.getAuthResponse())
    });

    const property = this.props.state;

    property(res);
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
