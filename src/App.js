import React from "react";
import Profile from "./Profile/Profile";
import userImg from "./images/user.jpg";
import userImg2 from "./images/user2.jpg";
import "./styles.css";

export default function App() {
  function alertName(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <Profile
        fullName="Itatchi"
        bio="Hello , my name is Uchiha Itatchi and I was an akutsuki"
        profession="Saving konoha village from behind the scenes"
        alertName={alertName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={userImg}
          alt="avatar"
        />
      </Profile>
      <Profile
        fullName="Nobara Kugisaki"
        bio="Hello , I am Nobara Kugisaki and I am one of the stronger sorcerers in Jujutsu high school"
        profession="part time kunoichi, full time jujutsu git initsorcerer"
        alertName={alertName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={userImg2}
          alt="avatar"
        />
      </Profile>
    </div>
  );
}
