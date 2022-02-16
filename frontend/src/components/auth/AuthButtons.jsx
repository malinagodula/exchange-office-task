import React from "react";

import Button from "../ui/button/Button";
import { useAuth0 } from "@auth0/auth0-react";

const AuthButtons = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Button
      type="button"
      styles={"ml-2"}
      action={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </Button>
  ) : (
    <>
      <Button
        type="button"
        outlined
        action={() =>
          loginWithRedirect({
            screen_hint: "signup",
          })
        }
      >
        Sign Up
      </Button>
      <Button type="button" styles={"ml-2"} action={() => loginWithRedirect()}>
        Log In
      </Button>
      {/* <Button
        type="button"
        styles={"ml-2"}
        action={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Log Out
      </Button> */}
    </>
  );
};
export default AuthButtons;
