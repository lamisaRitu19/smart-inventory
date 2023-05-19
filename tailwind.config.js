/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#333333',
      gray: '#828282',
      blue: '#1381E7',
      gradientBlue: '#2B5876',
      gradientPurple: '#464776',
      tableHead: '#CFD5DB',
      tableBody: '#FAFAFA',
      modalTxt: '#4F4F4F',
      modalStar: '#EF1A57',
      borderColor: 'rgba(0, 0, 0, 0.25)',
      addBtn: '#045692',
      editBtn: '#0F75BC',
      delBtn: '#EB5757'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

