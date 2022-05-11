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
          <h1>
            <strong>User Profile</strong>
          </h1>
          <p>{user.email}</p>

          {!user.wallet ? (
            <div className="border-solid border-2 border-gray-600 p-2">
              tutaj formularz z deklaracją portfela
            </div>
          ) : (
            <>portfel</>
          )}
        </div>
      </div>
    </>
  );
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loader />,
});
