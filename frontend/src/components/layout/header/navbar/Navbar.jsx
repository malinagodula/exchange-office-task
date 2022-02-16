import React from "react";
import { NavLink } from "react-router-dom";
// import Dropdown from "./Dropdown";
// import classnames from "classnames";
// import { ChevronDownIcon } from "@heroicons/react/outline";
// import styles from "./Navbar.module.scss";

import AuthButtons from "../../../auth/AuthButtons";
const Navbar = () => {
  // const [profileVisible, setProfileVIsible] = useState(false);

  // const profileVisibilityHandler = () => {
  //   setProfileVIsible((prev) => !prev);
  // };

  return (
    <div
      id="navbar"
      className="animated bg-white flex-1 pl-3 flex flex-row flex-wrap justify-end items-center md:items-center"
    >
      <nav>
        <ul className="flex">
          <li className="ml-2 text-xs">
            <NavLink to="/">Homepage</NavLink>
          </li>
          <li className="ml-2 text-xs">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="ml-2 text-xs">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="ml-2 text-xs">
            <NavLink to="/external-api">API</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row-reverse items-center">
        <div className="dropdown relative md:static">
          <AuthButtons />
          {/* <button
            className="menu-btn focus:outline-none focus:shadow-outline flex flex-wrap items-center"
            onClick={profileVisibilityHandler}
          >
            <div className="w-5 h-5 md:w-8 md:h-8 overflow-hidden rounded-full">
              <img
                className="w-full h-full object-cover"
                src="img/user.svg"
                alt=""
              />
            </div>

            <div className="sm:ml-2 capitalize flex ">
              <h1
                className="text-sm text-gray-800 font-semibold m-0 p-0 hidden sm:block leading-none hover:text-slate-500  transition-all duration-300 ease-in-out"
                dangerouslySetInnerHTML={{ __html: "Malina God" }}
              />
              <ChevronDownIcon className="h-4 w-4 slate-900 ml-2" />
            </div>
          </button> */}

          {/* {profileVisible && (
            <>
              <button
                className={classnames(
                  "fixed top-0 left-0 z-10 w-full h-full menu-overflow hidden"
                  // styles.Backdrop
                  // {
                  //   [styles.Backdrop]: profileVisible,
                  // }
                )}
              ></button>
              <Dropdown />
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
