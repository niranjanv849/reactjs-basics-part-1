import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div className="app__header">
      <div className="app__headerLeft">
        <Link to="/">
          <img
            className="app__headerLogo"
            src="https://cdn-icons-png.flaticon.com/512/2881/2881142.png"
            alt="logo"
          />
        </Link>
        <p>ReactJs Playground</p>
      </div>
      <div className="app__headerRight">
        <a href="/TaskOne">Task -1</a>
        <a href="/TaskTwo">Task -2</a>
        <a href="/TaskThree">Task -3</a>
        <a href="/TaskFour">Task -4</a>
      </div>
    </div>
  );
}

export default Header;
