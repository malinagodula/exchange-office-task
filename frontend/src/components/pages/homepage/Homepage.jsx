import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrencies,
  currencyActions,
} from "./../../../store/currency/currencySlice";
import Loader from "../../ui/loader/Loader";

// import Aside from "../../layout/aside/Aside";
import Card from "../../common/card/Card";
import Table from "../../common/table/Table";

function Homepage() {
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
        <div className="grid grid-cols-1 gap-6 mt-6">
          This is homepage, you can see it even being logout.
          <Card title={"Currencies"}>
            <Table data={currencies.items} />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Homepage;
