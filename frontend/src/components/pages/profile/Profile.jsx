import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loader from "../../ui/loader/Loader";
import Aside from "../../layout/aside/Aside";
function Profile() {
  const { user } = useAuth0();
  const { name, email } = user;

  return (
    <>
      {/* <Aside /> */}
      <div className="bg-gray-100 flex-1 p-6  mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h1>User Profile</h1>
          <h2>{name}</h2>
          <p>{email}</p>
          <pre className="col-12 text-light bg-dark p-4">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loader />,
});
