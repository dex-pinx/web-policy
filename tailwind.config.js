/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,ts}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        colors: {
            primary: {
                50: '#eef2ff',
                100: '#e0e7ff',
                200: '#c7d2fe',
                300: '#a5b4fc',
                400: '#818cf8',
                500: '#6366f1',
                600: '#4f46e5', // default
                700: '#4338ca',
                800: '#3730a3',
                900: '#312e81',
            },
            success: {
                50: '#ecfdf5',
                100: '#d1fae5',
                300: '#6ee7b7',
                500: '#10b981',
                700: '#047857',
                900: '#064e3b',
            },
            info: {
                50: '#eef6ff',
                100: '#dbeafe',
                300: '#93c5fd',
                500: '#3b82f6',
                700: '#1d4ed8',
                900: '#1e3a8a',
            },
            warning: {
                50: '#fffbeb',
                100: '#fef3c7',
                300: '#fcd34d',
                500: '#f59e0b',
                700: '#b45309',
                900: '#78350f',
            },
            danger: {
                50: '#fef2f2',
                100: '#fee2e2',
                300: '#fca5a5',
                500: '#ef4444',
                700: '#b91c1c',
                900: '#7f1d1d',
            },

            white: '#ffffff',
            black: '#000000',
            light: {
                bg1: '#ffffff', // white
                bg2: '#f9fafb', // Light Background
                bg3: '#f3f4f6', // Background
                bdd: '#d1d5db', // Border Default
                bd3: '#e5e7eb', // Border Light
                tx1: '#111827', // Text Primary
                tx2: '#374151', // Text Secondary
                tx3: '#6b7280', // Text Tertiary
                tx4: '#9ca3af', // Text Quaternary
            },
            dark: {
                bg1: '#111827', // white
                bg2: '#1f2937', // Light Background
                bg3: '#1f2937', // Background // TODO: 컬러확인
                bdd: '#292f3d', // Border Default
                bd3: '#374151', // Border Light
                tx1: '#ffffff', // Text Primary
                tx2: '#374151', // Text Secondary
                tx3: '#6b7280', // Text Tertiary
                tx4: '#9ca3af', // Text Quaternary
            },
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        },
        extend: {},
    },
    plugins: [],
}
