/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        keyframes: {
            scrollLeft: {
                to: {
                    left: '-200px',
                },
            },
            fadein: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
            },
        },
        animation: {
            scrollLeft: 'scrollLeft 30s linear infinite',
            fadein3s: 'fadein 3s',
            fadein2s: 'fadein 2s',
        },
        fontFamily: {
            Inter: '"Inter", sans-serif',
            Nunito: '"Nunito Sans", sans-serif',
        },
        colors: {
            primary: '#ffa500',
            secondary: '#fff3dd',
            white: '#fdfdfd',
            content: '#0a0a0a',
            gray: '#888a8c',
        },
        extend: {},
    },
    plugins: [],
};
