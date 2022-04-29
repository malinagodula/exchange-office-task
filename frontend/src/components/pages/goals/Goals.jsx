import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loader from "../../ui/loader/Loader";
// import Aside from "../../layout/aside/Aside";
import { useState, useRef } from "react";
import useHttp from "../../../hooks/use-http";
function Goals() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { user, getAccessTokenSilently } = useAuth0();

  const textInputRef = useRef();

  const [goals, setGoals] = useState([]);
  const transformGoals = (goalsObj) => {
    const loadedGolas = [];

    for (const goalKey in goalsObj) {
      loadedGolas.push({ id: goalKey, text: goalsObj[goalKey].text });
    }

    setGoals(loadedGolas);
  };

  useHttp(
    {
      url: `${serverUrl}/api/goals`,
    },
    transformGoals
  );

  const getGoals = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(`${serverUrl}/api/goals`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();
      setGoals(responseData);
    } catch (error) {
      setGoals(error.message);
    }
  };

  const setGoal = async (event) => {
    event.preventDefault();
    const enteredText = textInputRef.current.value;

    const token = await getAccessTokenSilently();

    const response = await fetch(`${serverUrl}/api/goals`, {
      method: "POST", // or 'PUT'
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: {
      //   text: enteredText,
      // },
      body: JSON.stringify({ text: enteredText }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      {/* <Aside /> */}
      <div className="bg-gray-100 flex-1 p-6  mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <h1>User Goals from backend</h1>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          {/* <h3>
            <strong>{token}</strong>
          </h3> */}
          <div>
            <button
              type="button"
              className="bg-slate-400 text-white hover:bg-slate-500 text-xs my-1 py-2 px-4 mr-8"
              onClick={getGoals}
            >
              GET logged user goal
            </button>
          </div>

          {goals &&
            goals.map((goal, index) => (
              <div
                key={index}
                className="border-solid border border-gray-400 p-4"
              >
                <h2>
                  <strong>goal.text: </strong> {goal.text}
                </h2>
                <p>
                  <strong>goal.user: </strong>
                  {goal.user}
                </p>
              </div>
            ))}

          <div>
            <form onSubmit={setGoal}>
              <label className="mb-1" htmlFor="password">
                goal.text
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
                SET logged user goal
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuthenticationRequired(Goals, {
  onRedirecting: () => <Loader />,
});
