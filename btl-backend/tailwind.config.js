import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],

            },
            colors: {
                'igPrimaryButton' : '#0095f6', //rgba(0,149,246)
                'igLink' : '#00376b' //rgba(0,55,107)
            },
            borderColor: {
                DEFAULT: '#dbdbdb'
            }
        },
        container: {
            center: true,
        },
    },

    plugins: [forms, require('tailwind-scrollbar-hide')],
};
