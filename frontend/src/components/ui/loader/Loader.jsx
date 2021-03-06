import React from "react";
const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loader = () => (
  <div className="m-[90px]">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loader;
