import React from "react";
import Video from "../res/Video";
import Login from "../login/Login";

function IntroWord() {
  return (
    <div className="contents">
      <Video></Video>

      <div className="loginbox">
        <Login></Login>
      </div>
      <div className="description">
        <div className="title">
          <span>기술</span>을 통한 <span>감동</span>과 <span>공감</span> 발견
        </div>
        <div className="text">
          <p>저희 에프엠 테크는 예술과 기술의 조화를 추구함으로,</p>
          <p>생각을 더욱 발전시키고 마음을 움직이기 위해 노력하며</p>
          <p>이를 위한 서비스를 세상에 선보입니다.</p>
        </div>
      </div>
    </div>
  );
}

export default IntroWord;
