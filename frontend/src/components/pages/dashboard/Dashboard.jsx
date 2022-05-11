import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrencies,
  currencyActions,
} from "./../../../store/currency/currencySlice";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loader from "../../ui/loader/Loader";

// import Aside from "../../layout/aside/Aside";
import Card from "../../common/card/Card";
import Table from "../../common/table/Table";
function Dashboard() {
  const { currencies, isLoading, isError, message } = useSelector(
    (state) => state.currency
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getCurrencies());

    return () => {
      dispatch(currencyActions.reset());
    };
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* <Aside /> */}
      <div className="bg-gray-100 flex-1 p-6  mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title={"Currencies"}>
            <Table data={currencies.items} />
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
