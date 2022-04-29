import { useState, useEffect } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loader from "../../ui/loader/Loader";
// import useHttp from "../../../hooks/use-http";

// import Aside from "../../layout/aside/Aside";
import Card from "../../common/card/Card";
import Table from "../../common/table/Table";
function Dashboard() {
  // const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [currencies, setCurrencies] = useState([]);
  const getCurrencies = async () => {
    try {
      const response = await fetch(
        `http://webtask.future-processing.com:8068/currencies`,
        {
          headers: {},
        }
      );

      const responseData = await response.json();
      console.log(responseData.items);
      setCurrencies(responseData.items);
    } catch (error) {
      console.log(error);
      // setCurrencies(error.message);
    }
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <>
      {/* <Aside /> */}
      <div className="bg-gray-100 flex-1 p-6  mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title={"Currencies"}>
            <Table data={currencies} />
          </Card>
          <Card title={"My wallet"} />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card title={"Currencies"} />
          <Card title={"Available"} />
        </div> */}
      </div>
    </>
  );
}

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Loader />,
});
