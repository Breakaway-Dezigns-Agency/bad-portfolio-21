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
        blue: {
          soft: '#C1E1E9',
          DEFAULT: '#4169E1',
          deep: '#2C3E50'
        },
        gray: "#605459",
        black: {
          DEFAULT: '#000',
          soft: '#333'
        },
      },
      animation:{
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
}
