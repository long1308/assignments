/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  // prefix: "tw-",
  theme: {
    extend: {
      boxShadow: {
        boxShadowNew: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
    },
  },
  plugins: [],
};
