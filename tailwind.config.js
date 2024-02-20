import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        ebonyClay: "#212c40",
        ...defaultTheme.colors,
      },
    },
  },
  plugins: [],
};
