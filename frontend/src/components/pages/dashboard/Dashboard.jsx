import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loader from "../../ui/loader/Loader";

import Aside from "../../layout/aside/Aside";
import Card from "../../common/card/Card";
function Dashboard() {
  return (
    <>
      <Aside />
      <div className="bg-gray-100 flex-1 p-6  mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title={"Currencies"} />
          <Card title={"My wallet"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card title={"Currencies"} />
          <Card title={"Available"} />
        </div>
      </div>
    </>
  );
}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Loader />,
});
