
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { cream:"#F7E7D6", ink:"#1E2732", coral:"#F77C45", teal:"#0E7B79", sand:"#F5D595", sky:"#A8D8EA" },
      boxShadow: { card: "0 10px 35px rgba(0,0,0,.08)" }
    }
  },
  plugins: []
};
