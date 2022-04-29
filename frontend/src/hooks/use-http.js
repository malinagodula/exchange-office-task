import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const useHttp = (requestConfig, applyData) => {
  const { getAccessTokenSilently } = useAuth0();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        // headers: requestConfig.headers ? requestConfig.headers : {},
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      console.log(data);
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
