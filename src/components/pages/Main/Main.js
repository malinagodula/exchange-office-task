import Aside from "../../layout/aside/Aside";
import Dashboard from "../dashboard/Dashboard";

function Main() {
  return (
    <>
      <main className="h-screen flex flex-row flex-wrap mt-16 pt-2 md:mt-20 md:pt-0">
        <Aside />
        <Dashboard />
      </main>
    </>
  );
}

export default Main;
