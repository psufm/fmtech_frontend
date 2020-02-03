import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class Login extends Component {

  constructor(props){
    super(props);
    this.__getLocalLoginState();
  }//초기에 확인..


  __getLocalLoginState = () => {
    localStorage.getItem("loginText") == null ? localStorage.setItem("loginText",">>>>>>>로 그 인<<<<<<<<") : console.log("이미있는걸..?");
  }//이부분..나중에..바꿔줘야함..디비로..



  render =() => {
    return (
        <GoogleLogin
          clientId="568529977405-s7f89cnkohtph8tru5mhnrp3q7eeeqpd.apps.googleusercontent.com" // admin oauth 인증키.
          buttonText={localStorage.getItem("loginText")} //메일이 있으면? 로그아웃, 없으면? 로그인
          onSuccess={this.__getUserLogin} // 로그인 성공시 이동할 함수
          onFailure={this.__loginFailAlert} //실패시 이동할 함수
        />
    );
  }

  __getUserMailSaveCheck = () =>{//메일값이 있으면 true, 아님 false
    return localStorage.getItem("mail") == null ? false : true;//메일값이 null이니? 그럼 false ! (false = 메일이 없다.)
  }//메일이 있다 : true

  __getUserLogin = res => {// 로그인상태면? 연결 끊고, 그게 아니라면 로그인 로직 해주기 !
    this.__getUserMailSaveCheck() ? this.__disconnectUser(res) : this.__getUserAddressCheck(res);
  }
  
  __getUserAddressCheck = res => {//우리회사의 계정인지..? 이부분 타회사계정으로 체크하는거 필요함.
    res.getHostedDomain() == "fmtech.io" ? this.__setUserInfo(res) : this.__loginAnotherMail(res);
  }

  __setUserInfo = res => {//상태값 설정.(로그인 로직 저장 부분)
    localStorage.setItem("mail",res.getBasicProfile().getEmail());//로컬에 저장 (DB로 대체하거나 REUDX로 대체할 예정인 부분.)
    localStorage.setItem("loginText",">>>>>>>로 그 아 웃<<<<<<<<")
    this.setState({
      logintext : localStorage.getItem("loginText")
    });
  };

  __disconnectUser = res => { //상태값 설정. (로그아웃 로직 삭제 부분)
    localStorage.removeItem("mail");//로컬 삭제함 (DB로 대체하거나 REUDX로 대체할 예정인 부분.)
    localStorage.setItem("loginText",">>>>>>>로 그 인<<<<<<<<")
    res.disconnect();//연결을 끊어, 계정선택창이 새로 나옴.
    this.setState({
      logintext : localStorage.getItem("loginText")
    });
  }

  __loginAnotherMail = (res) => {
    res.disconnect();//연결을 끊어, 계정선택창이 새로 나옴.
     alert("사내 G-Suite 계정으로만 접속 가능합니다.");
  };

  __loginFailAlert = () => {//취소했을때
    return console.log("exit");
  };
}

export default Login;
