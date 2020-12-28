import React from "react";

const data = {
  miffy: {
    name: "미피",
    description: "네덜란드에 사는 아기 토끼",
  },
  ryan: {
    name: "라이언",
    description: "카카오 최고 전무",
  },
};

const Profile = ({ match }) => {
  // match : 현재 컴포넌트의 경로 규칙에 대한 정보
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};
export default Profile;
