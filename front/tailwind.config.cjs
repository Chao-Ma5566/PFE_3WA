/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  './src/**/*.{html,jsx, js}'
  ],
  theme: {
    fontFamily : {
      satoshi: "'Satoshi', sans",
    },
    colors : {
       gray: {
        100: "#E6E6E6",
        500: "#ABBBC2",
        700: "#393C49",
        800: "#252836",
        900: "#1F1D2B",
       } ,
       primary: "#FC5E64",
       neutral : {
       50 : "#fafafa",
       100 : "#f5f5f5"
       },
       green: {
       500: "#00b0a6",
       800: "#008290"
       },
       yellow: "#e1aa12",
      }, 
    extend: {},
  },
  plugins: [],
}
