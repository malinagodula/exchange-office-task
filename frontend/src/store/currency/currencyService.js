// const currencyUrl = process.env.CURRENCY_SERVER_URL;

// Get current rates of currenncies
const getCurrencies = async () => {
  //   const response = await fetch(`${currencyUrl}`, {
  const response = await fetch(
    `https://webtask.future-processing.com:8068/currencies`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Request failed!");
  }

  return response.json();
};

const currencyService = {
  getCurrencies,
};

export default currencyService;
