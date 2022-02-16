import React from "react";
import classnames from "classnames";

const Button = ({ type, action, styles, outlined, children }) => {
  return (
    <button
      type={type}
      className={classnames("text-xs my-1 py-2 px-4 max-w-max", styles, {
        "bg-slate-600 text-white hover:bg-slate-500": !outlined,
        "text-slate-600 hover:text-slate-400": outlined,
      })}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
