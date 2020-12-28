import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞에 ? 생략
  });
  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과값은 문자열이다
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다</p>
      {showDetail && <p>detail 값을 true 로 설정했군요! </p>}
      {/* http://localhost:3000/about?detail=true */}
    </div>
  );
};

export default About;
