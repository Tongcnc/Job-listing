/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "Light-Grayish-bg": "hsl(180, 52%, 96%)",
      "Light-Grayish-filter": "hsl(180, 31%, 95%)",
      "Dark-Grayish": "hsl(180, 8%, 52%)",
      "Very-Dark-Grayish-": "hsl(180, 14%, 20%)",
    },
    fontSize: {
      body2: [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "500",
          fontStyle: "Uppercase",
        },
      ],
      body1: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
        },
      ],
      headline2: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "700",
        },
      ],
      headline1: [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "700",
        },
      ],
    },
    fontFamily: {
      "League Spartan": ["LeagueSpartan"],
    },
    extend: {},
  },
  plugins: [],
};
