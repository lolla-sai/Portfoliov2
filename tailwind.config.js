/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "custom-sans": [
                    "'Calibre'",
                    "'Inter'",
                    "'San Francisco'",
                    "'SF Pro Text'",
                    "-apple-system",
                    "system-ui",
                    "sans-serif",
                ],
                "custom-mono": [
                    "'SF Mono'",
                    "Fira Code",
                    "Fira Mono",
                    "'Roboto Mono'",
                    "monospace",
                ],
            },
        },
    },
    plugins: [],
};
