import React from "react";
import IconGithub from "../assets/IconGithub";
import IconSocialLinkedin from "../assets/IconLinkedin";
import { Link } from "react-router-dom";

const DevInfo = () => {
  return (
    <div className="dev-info-container">
      <div className="dev-info">
        <p>Developed by</p>
        <p>-</p>
        <Link to={'mailto:sakthivel.ganesan@hotmail.com'} target="_blank" className="dev-name">Sakthivel G</Link>
        <p>-</p>
        <div className="links">
          <Link
            to={"https://github.com/sakt-hi"}
            className="icon-cont"
            target="_blank"
          >
            <IconGithub className="git-icon" />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/sakthivel-g/"}
            className="icon-cont"
            target="_blank"
          >
            <IconSocialLinkedin className="linkedin-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevInfo;
