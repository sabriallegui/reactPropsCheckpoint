import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";

export default function Profile(props) {
  const alertName = props.alertName
  return (
    <div className="profile-card">
      <div className="avatar">{props.children}</div>
      <div className="info-container">
        <h3>
          <span className="label"> Name : </span>
          {props.fullName}{" "}
        </h3>
        <p>
          {" "}
          <span className="label"> Bio : </span>
          {props.bio}{" "}
        </p>
        <p>
          {" "}
          <span className="label"> Profession : </span>
          {props.profession}{" "}
        </p>


        <button
          onClick={() => alertName(props.fullName)}
          className="btn btn-profile"
        >
          Say Hello{" "}
        </button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  alertName: PropTypes.func
};

Profile.defaultProps = {
  fullName: "No Data ",
  profession: "No Data ",
  bio: "No Data ",
  alertName: () => {
    alert("There is no Props ");
  }
};
