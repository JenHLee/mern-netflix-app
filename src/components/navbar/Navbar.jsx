//rafce
import React from "react";
import "./navbar.scss";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { WindowSharp } from "@mui/icons-material";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // when scroll -> make the navbar's background color (transparent) none
  //console.log(window.pageYOffset); // 0

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true); //if window.pageYOffset means the result is 0 (default false) : true (more than 0)
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KID</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
