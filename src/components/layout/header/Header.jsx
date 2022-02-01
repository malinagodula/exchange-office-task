import Navbar from "./navbar/Navbar";
import { CurrencyDollarIcon } from "@heroicons/react/outline";
import classnames from "classnames";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 md:w-full flex flex-row flex-wrap items-center bg-white p-6 border-b border-gray-300">
      <a
        className="flex-none text-sm flex flex-row items-center text-slate-800 hover:text-slate-500  transition-all duration-300 ease-in-out"
        href="/"
      >
        <CurrencyDollarIcon
          className={classnames(
            "h-6 w-6 md:h-8 md:w-8 mr-1",
            styles.Header__Logo
          )}
        />
        <strong className="capitalize ml-1 flex-1 md:text-lg text-sm font-bold m-0 p-0 leading-none">
          Currency Exchange
        </strong>
      </a>

      <Navbar />
    </header>
  );
};

export default Header;
