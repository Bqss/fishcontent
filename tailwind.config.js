/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.html"
    ],
    theme: {
        fontFamily: {
            'poppins': 'Poppins , sans-serif'
        },

        colors:{
            'primary': '#ea580c'  ,
            'secondary': '#0f172a',
            'accent' : '#fff',
            'neutral-1' : '#000000',
            'hover-1': '#fb923c',
            'hover-2': '#94a3b8'
        },
        extend: {
            keyframes : {
                slidetobottom : {
                    '0%' : {
                        opacity: 0,
                        transformOrigin: "top",
                        transform: "scaleY(0)"
                    }, 
                    "100%":{
                        opacity: 1,
                        transformOrigin: "top",
                        transform: "scaleY(1)"
                    }
                }
            },
            animation :{
                slidetobottom : 'slidetobottom .3s ease-in-out'
            }
            
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
}
