module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "20px",
        lg: "40px",
      },
    },
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1440px",
      hd: "1920px",
    },
    extend: {
      fontFamily: {
        body: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
