const serverUrl = process.env.REACT_APP_SERVER_URL;

// Create new deal
const createDeal = async (data) => {
  const token = data.token.replace('"', "");
  const response = await fetch(`${serverUrl}/api/goals`, {
    method: "POST", // or 'PUT'
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: data.text }),
  });

  if (!response.ok) {
    throw new Error("Request failed!");
  }

  return response.json();
};

// Get logged user deals
const getDeals = async (token) => {
  const response = await fetch(`${serverUrl}/api/goals`, {
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

const dealService = {
  createDeal,
  getDeals,
};

export default dealService;
