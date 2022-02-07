module.exports = {
  content: [
    "./public/route-home.html",
    "./public/routes/*.html",
    "./public/routes/route-3-points/*.html",
    "./public/routes/**/*.html",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
