/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.html"
    ],
    theme: {
        fontFamily: {
            'poppins': 'Poppins , sans-serif'
        },

        extend: {
            backgroundImage : {
                login : "url('./..//images/texture.svg') "
             },

             backgroundPosition: {
                sidebar : 'center '
             },
             backgroundSize : {
                '1.25': '100rem 75rem'
             }
             
             ,
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
                },
                fade : {
                    '0%' : {
                        opacity : 0,
                    }
                    ,
                    '100%' : {
                        opacity : 1 
                    }
                }

            },
            
            colors: {
                'primary': '#ea580c',
                'secondary': '#0f172a',
                'accent': '#fff',
                'neutral-1': '#000000',
                'hover-1': '#fb923c',
                'hover-2': '#94a3b8'
            },
            animation :{
                slidetobottom : 'slidetobottom .3s ease-in',
                fade : 'fade .5s ease-in',
                'fade-reverse' : 'fade .5s ease-in reverse',
                'slidetobottom-reverse' : 'slidetobottom .3s ease-in reverse'
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
}
