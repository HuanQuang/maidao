/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            boxShadow: {
                '3xl': '0px 3px 8px rgba(0, 0, 0, 0.24 )',
            },
        },
        colors: {
            // Using modern `rgb`
            primary: 'var(--color-primary)',
        },
        screens: {
            tablet: '600px',
            // => @media (min-width: 640px) { ... }

            laptop: '768px',
            // => @media (min-width: 1024px) { ... }

            desktop: '1280px',
            // => @media (min-width: 1280px) { ... }
        },
    },
    plugins: [],
};
