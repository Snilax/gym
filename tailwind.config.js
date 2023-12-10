/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "/*eslint-env node*/",
    ],
    theme: {
        screens: {
            '2xl': { 'max': '1535px' },
            // => @media (max-width: 1535px) { ... }

            'xl': { 'max': '1279px' },
            // => @media (max-width: 1279px) { ... }

            'lg': { 'max': '1023px' },
            // => @media (max-width: 1023px) { ... }

            'md': { 'max': '767px' },
            // => @media (max-width: 767px) { ... }

            'sm': { 'max': '639px' },
            // => @media (max-width: 639px) { ... }
            'xs': { 'max': '469px' },
        },
        extend: {

            colors: {
                "black": "#000",
                "white": "#fff",
                "dark-gray": "rgb(20, 27, 34)",
                "orange": "#F66000",
                "mid-orange": "#FFBDAC",
                "light-orange": "#FFEBE6",
                "gray-tp": "rgba(205, 205, 205, 0.13)",
                "gray-font": "rgba(234, 234, 234, 0.65)",
                "grey-plan": "#D9D9D9",
                "standard-plan": "#F66000",
            },
            width: {
                "10-10": "100%",
                "9-10": "90%",
                "8-10": "80%",
                "7-10": "70%",
                "6-10": "60%",
                "5-10": "50%",
                "4-10": "40%",
                "3-10": "30%",
                "2-10": "20%",
                "1-10": "10%"
            }
        }
    },
    plugins: [],
};
