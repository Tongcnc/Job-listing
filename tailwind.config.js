/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "Light-Grayish-bg": "hsl(180, 52%, 96%)",
      "Gray-color": "hsl(180, 10%, 65%)",

      "Light-color": "hsl(180,39%,95%)",
      "Primary-color": "hsl(179,29%,51%)",
      "Dark-color": "hsl(179,29%,10%)",
      white: "#fff",
    },
    fontSize: {
      body2: [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "500",
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
        "14px",
        {
          lineHeight: "24px",
          fontWeight: "700",
        },
      ],
      headline1: [
        "18px",
        {
          lineHeight: "30px",
          fontWeight: "700",
        },
      ],
    },
    fontFamily: {
      "League Spartan": ["LeagueSpartan"],
    },
    dropShadow: {
      "3xl": "10px 10px 10px rgba(93,165,164,0.4)",
    },
    extend: {},
  },
  plugins: [],
};
