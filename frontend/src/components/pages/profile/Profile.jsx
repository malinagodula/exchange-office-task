// import { useState, useEffect } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import Loader from "../../ui/loader/Loader";
// import Aside from "../../layout/aside/Aside";
function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {/* <Aside /> */}
      <div className="bg-gray-100 flex-1 p-6  mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <h1>User Profile</h1>
          <h2>{JSON.stringify(user, null, 2)}</h2>
          <h2>{user.email}</h2>

          {!user.wallet ? <>tutaj formularz</> : <>portfel</>}
        </div>
      </div>
    </>
  );
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loader />,
});
