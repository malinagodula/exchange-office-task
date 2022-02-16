import React from "react";
import classnames from "classnames";
// import * as styles from "./Link.module.scss";

const Link = ({ href, classes, children }) => {
  return (
    <a
      href={href}
      className={classnames(
        "py-2 flex items-center capitalize text-sm tracking-wide",
        classes
      )}
    >
      {children}
    </a>
  );
};

export default Link;
