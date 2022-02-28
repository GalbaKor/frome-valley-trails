module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin"), require("@tailwindcss/forms")],
};
