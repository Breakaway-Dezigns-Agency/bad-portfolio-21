module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",
      md: "790px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", 'san-serif'],
        marker: ["Permanent Marker", 'cursive']
      },
      colors: {
        blue: "#4DAABF",
        gray: "#605459",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
}
