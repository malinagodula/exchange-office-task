import { useState, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../ui/button/Button";

// import classes from "./AuthForm.module.css";
// import classnames from "classnames";
const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // const { loginWithRedirect } = useAuth0();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //optional: add validation

    if (isLogin) {
    } else {
      fetch("http://localhost:3000/register", {
        method: "POST",
        body: {
          email: enteredEmail,
          password: enteredPassword,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res);
        // if (res.ok) {
        //   //..
        // } else {
        //   return res.json().then((data) => {
        //     console.log(data);
        //   });
        // }
      });
    }
  };

  return (
    <div
      className={
        "w-full max-h-max p-8 text-xs bg-white border border-slate-300"
      }
    >
      <h1 className="mb-10 text-xl text-center font-bold">
        {isLogin ? "Login" : "Sign Up"}
      </h1>
      <form onSubmit={submitHandler}>
        <div className={"flex flex-col my-4 text-left"}>
          <label className="mb-1" htmlFor="email">
            Your Email
          </label>
          <input
            className={
              "h-7 p-2 bg-slate-50 border border-slate-300 focus:outline-0 focus:border-slate-500 focus:bg-slate-100"
            }
            type="email"
            id="email"
            required
            ref={emailInputRef}
          />
        </div>
        <div className="flex flex-col my-4 text-left">
          <label className="mb-1" htmlFor="password">
            Your Password
          </label>
          <input
            className={
              "h-7 p-2 bg-slate-50 border border-slate-300 focus:outline-0 focus:border-slate-500 focus:bg-slate-100"
            }
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className="flex flex-col mt-4 items-center">
          <Button type="button">{isLogin ? "Login" : "Create Account"}</Button>
          <Button type="button" outlined action={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
