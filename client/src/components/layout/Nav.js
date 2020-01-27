import React, { Fragment, useContext } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import UserContext from "../../context/user/userContext";

function Nav() {
  const userContext = useContext(UserContext);

  const { isAuthenticated, logout, updateStars, user } = userContext;

  const onLogout = () => {
    logout();
  };

  // const put = () => {
  //     /* THIS IS FOR TESTING UPDATE STARS */
  //     updateStars(user, 3);
  // };

  const authLinks = (
    <Fragment>
      {/* <button onClick={put}></button>{' '} */}
      {/* THIS IS FOR TESTING UPDATE STARS */}
      <li className="hvr-underline-from-right hvr-rotate">
          <Link to="/about" className="white">
            About
          </Link>
        </li>
      <li>Welcome {user && user.name}</li>
      <li>
        <i className="far fa-star stars"></i>
        <span className="small">x </span>
        {user && user.stars}
      </li>
      <li>
        <a className="hvr-icon-forward" onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt hvr-icon white"></i>
          <Link to="/">
            <span className="hide-sm white hvr-underline-from-left ml-1">
              Logout
            </span>
          </Link>
        </a>
      </li>
      
    </Fragment>
  ); // if there is a user, display the users name

  const guestLinks = (
    <Fragment>
      {/* <ul className="guest-links"> */}
      <li className="hvr-underline-from-right hvr-rotate">
          <Link to="/about" className="white">
            About
          </Link>
        </li>
        <li className="hvr-underline-from-right hvr-rotate">
          <Link to="/register" className="white">
            Register
          </Link>
        </li>
        <li className="hvr-underline-from-right hvr-rotate">
          <Link to="/login" className="white">
            Login
          </Link>
        </li>
        
      {/* </ul> */}
    </Fragment>
  ); // if there is a user, display the users star count

  const navStyle = {
    color: "white"
  };

  return (
    <nav className="navbar">
      <Link to="/" className="title-link">
        <h1 style={navStyle} className="title">
          <i className="fas fa-star spin"></i>
          <span className="hvr-underline-from-left">Star Jump</span>
        </h1>
      </Link>
      <ul className="nav-links">
        {isAuthenticated ? authLinks : guestLinks}
        {/*                 <Link style={navStyle} to='/mainapp'>
                    <li>Main App</li>
                </Link> */}
      </ul>
    </nav>
  );
}

export default Nav;
