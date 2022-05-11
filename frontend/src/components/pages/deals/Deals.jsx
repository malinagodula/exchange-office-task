import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loader from "../../ui/loader/Loader";
// import Aside from "../../layout/aside/Aside";
import { useRef, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  createDeal,
  getDeals,
  dealActions,
} from "../../../store/deals/dealSlice";
// import { selectUser } from "../../../store/auth/authSlice";
function Deals() {
  // const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { getAccessTokenSilently } = useAuth0();

  const { deals, isLoading, isError, message } = useSelector(
    (state) => state.deal
  );

  // const { user } = useSelector((state) => state.auth);
  // console.log(user);

  const dispatch = useDispatch();

  const textInputRef = useRef();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    getAccessTokenSilently().then((token) => dispatch(getDeals(token)));

    return () => {
      dispatch(dealActions.reset());
    };
  }, [getAccessTokenSilently, dispatch, isError, message]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const enteredText = textInputRef.current.value;

    getAccessTokenSilently().then((token) =>
      dispatch(createDeal({ text: enteredText, token }))
    );
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* <Aside /> */}
      <div className="bg-gray-100 flex-1 p-6  mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <h1>User Deals from backend</h1>
          {deals &&
            deals.map((deal, index) => (
              <div
                key={index}
                className="border-solid border border-gray-400 p-4"
              >
                <h2>
                  <strong>deal.text: </strong> {deal.text}
                </h2>
                <p>
                  <strong>deal.user: </strong>
                  {deal.user}
                </p>
              </div>
            ))}

          <div>
            testowe sprawdzenie czy działa API:
            <form onSubmit={onSubmit}>
              <label className="mb-1" htmlFor="password">
                {/* deal.text */}
              </label>
              <br />
              <input
                className={
                  "h-7 p-2 mr-4 bg-slate-50 border border-slate-300 focus:outline-0 focus:border-slate-500 focus:bg-slate-100"
                }
                type="text"
                id="text"
                required
                ref={textInputRef}
              />
              <br />
              <br />

              <button
                type="submit"
                className="bg-slate-400 text-white hover:bg-slate-500 text-xs my-1 py-2 px-4"
              >
                SET logged user deal
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuthenticationRequired(Deals, {
  onRedirecting: () => <Loader />,
});
