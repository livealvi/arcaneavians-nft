import React from "react";
import "./Header.css";
import logo from "../../asset/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar-button">
        <ul>
          <span className="navbar-button-social">
            <li>
              <a href="">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li>
          </span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Roadmap</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
