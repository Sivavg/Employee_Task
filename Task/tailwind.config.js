/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A84FF', // The bright blue color from screenshots
                background: '#F5F6FA', // Light grey background
                border: '#E2E8F0', // Border color
                textMain: '#1e293b',
                textMuted: '#64748b'
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
