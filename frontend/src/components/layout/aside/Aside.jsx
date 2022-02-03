import Link from "../../ui/link/Link";
import {
  LogoutIcon,
  UserCircleIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";

function Aside() {
  return (
    <aside className=" relative flex flex-col flex-wrap bg-white border-r border-slate-300 p-6 flex-none w-64 mt-16 md:mt-20 shadow-xl animated faster">
      <p className="uppercase text-xs text-slate-600 mb-4 tracking-wider">
        ASIDE
      </p>
      <Link href="/" classes="hover:text-slate-400">
        <UserCircleIcon className="h-4 w-4 mr-2" />
        edit profile
      </Link>

      <Link href="/" classes="hover:text-slate-400">
        <ClipboardCheckIcon className="h-4 w-4 mr-2" />
        tasks
      </Link>

      <Link href="/" classes="hover:text-slate-400">
        <LogoutIcon className="h-4 w-4 mr-2" />
        log out
      </Link>
    </aside>
  );
}

export default Aside;
