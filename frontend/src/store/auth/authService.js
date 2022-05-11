const serverUrl = process.env.REACT_APP_SERVER_URL;

// Get logged user deals
const getLoggedUser = async (token) => {
  const response = await fetch(`${serverUrl}/api/users/logged`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Request failed!");
  }

  return response.json();
};

const authService = {
  getLoggedUser,
};

export default authService;
