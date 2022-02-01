import React from "react";
// import classnames from "classnames";
import Link from "../../../ui/link/Link";
import {
  LogoutIcon,
  UserCircleIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";
// import styles from "./Dropdown.module.scss";
const Dropdown = () => {
  return (
    <div className="text-slate-600  menu md:mr-6 bg-white shadow-md absolute z-20 right-0 w-40 mt-6  transition-all duration-300 ease-in-out">
      <Link href="/" classes="px-4 hover:bg-slate-100">
        <UserCircleIcon className="h-4 w-4 mr-2 " />
        edit profile
      </Link>

      <Link href="/" classes="px-4 hover:bg-slate-100">
        <ClipboardCheckIcon className="h-4 w-4 mr-2" />
        tasks
      </Link>

      <Link href="/" classes="px-4 hover:bg-slate-100">
        <LogoutIcon className="h-4 w-4 mr-2" />
        log out
      </Link>
    </div>
  );
};

export default Dropdown;
