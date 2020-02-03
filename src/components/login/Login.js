import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class Login extends Component {
  render() {
    return (
        <GoogleLogin
          clientId="568529977405-s7f89cnkohtph8tru5mhnrp3q7eeeqpd.apps.googleusercontent.com" // admin oauth 인증키.
          buttonText="Login" //로그인 버튼 표시 텍스트
          onSuccess={this.__userEmailValidCheck} // 로그인 성공시 이동할 함수
          onFailure={this.__loginFailAlert} //실패시 이동할 함수
        />
    );
  }
  __getUserEmail(res) {
    //정보에서 유저 이메일만 반환해주기
    const mail = res.profileObj.email;
    return mail;
  }

  __userEmailValidCheck = res => {
    //유저의 이메일이 유효한 이메일인지 체크한다
    const user_email = this.__getUserEmail(res); //유저 이메일을 먼저 받아오고..
    const mailAddress = user_email.split("@"); //골뱅이 기준으로 파싱 해서..
    mailAddress[1] === "promotion.co.kr" || mailAddress[1] === "fmtech.io" //골뱅이 기준 2번째 배열 값 비교 ( or )
      ? this.__setUserInfo(res) //맞으면 유저정보 세팅
      : this.__loginAnotherMail(); //틀리면 알림창
  };

  __setUserInfo = res => {
    //부모컴포넌트한테 유저 정보를 설정해준다 (전달해준다)
    console.log("login");
    localStorage.setItem("data",res.toString());
  };

  __loginAnotherMail = () => {
    return alert("사내 G-Suite 계정으로만 접속 가능합니다.");
  };

  __loginFailAlert = () => {
    return alert(
      "유저정보를 얻어오는데 실패하였습니다. 관리자에게 문의해주세요!"
    );
  };
}

export default Login;
