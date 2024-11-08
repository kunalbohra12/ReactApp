/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#F7F7F7',
        'orangeColor': '#FE8551',
        'darkColor': '#16193C',
        'blackColo1r': '#555555',
        'greyColor': '#808080',


      },
      backgroundImage: {
        'section-image': "url('./assets/Illustration.png')", // Add your image path here
        'bg-image': "url('./assets/bgImage.png')", // Add your image path here

      },

      fontSize: {
        custom_h1: [
          "76px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontStyle: "bold",
            fontWeight: "700",
            // lineHeight: "110%",
            // letterSpacing: "-3.5px",
          },
        ],
        custom_h2: [
          "62px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "700",
            fontStyle: "bold",
            lineHeight: "110%",
            letterSpacing: "0px",
          },
        ],
        custom_h3: [
          "52px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontSize: "52px",
            fontWeight: "700",
            fontStyle: "bold",
            // lineHeight: "115%",
            // letterSpacing: "-2px",
          },
        ],
        custom_h4: [
          "42px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "700",
            fontStyle: "bold",
            // lineHeight: "120%",
            // letterSpacing: "-2px",
          },
        ],
        custom_h5: [
          "32px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "700",
            fontStyle: "bold",
            // lineHeight: "40px",
            // letterSpacing: "-1px",
          },
        ],
        custom_h6: [
          "24px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontSize: "24px",
            fontWeight: "700",
            fontStyle: "bold",
            // lineHeight: "130%",
            // letterSpacing: "-0.8px",
          },
        ],
        custom_h6r: [
          "24px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontSize: "24px",
            fontWeight: "400",
            // lineHeight: "130%",
            // letterSpacing: "-0.8px",
          },
        ],
        body_copy1: [
          "20px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "400",
            // lineHeight: "150%",
            // letterSpacing: "-0.5px",
          },
        ],
        body_copy1_b: [
          "20px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "700",
            fontStyle: "bold",
            // lineHeight: "150%",
            // letterSpacing: "-0.5px",
          },
        ],
        body_copy2: [
          "18px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "400",
            // lineHeight: "140%",
            // letterSpacing: "-0.5px",
          },
        ],
        body_copy2_black: [
          "18px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "900",
            fontStyle: "bold",
            // lineHeight: "140%",
            // letterSpacing: "-0.5px",
          },
        ],
        small1: [
          "16px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "400",
            // lineHeight: "145%",
            // letterSpacing: "-0.3px",
          },
        ],
        small1_bold: [
          "16px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "700",
            fontStyle: "bold",
            // lineHeight: "145%",
            // letterSpacing: "-0.3px",
          },
        ],
        small2: [
          "14px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "400",
            // lineHeight: "145%",
            // letterSpacing: "-0.2px",
          },
        ],
        small2_b: [
          "14px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "700",
            fontStyle: "bold",
            // lineHeight: "145%",
            // letterSpacing: "-0.2px",
          },
        ],
        small3: [
          "12px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "400",
            // lineHeight: "130%",
            // letterSpacing: "-0.2px",
          },
        ],
        small3_b: [
          "12px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "700",
            fontStyle: "bold",
            // lineHeight: "130%",
            // letterSpacing: "-0.2px",
          },
        ],
        small4: [
          "10px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "400",
            // lineHeight: "130%",
            // letterSpacing: "-0.2px",
          },
        ],
        small4_b: [
          "10px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "700",
            fontStyle: "bold",
            // lineHeight: "130%",
            // letterSpacing: "-0.2px",
          },
        ],
        caption: [
          "16px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "700",
            fontStyle: "bold",
            // lineHeight: "150%",
            // letterSpacing: "1.5px",
          },
        ],
        caption2: [
          "14px",
          {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "700",
            fontStyle: "bold",
            // lineHeight: "140%",
            // letterSpacing: "1.5px",
          },
        ],
      },
    },
  },




  fontFamily: {
    Sanchez: ["Sanchez", 'serif'],
    body: ['"Poppins", sans-serif'],
    // sans: ['"Noto Sans Arabic"', "sans-serif"],
    arial: ["arial", "sans-serif"],
    verdana: ["verdana", "sans-serif"],
    inter: ["inter", "sans-serif"],
    lato: ["lato", "sans-serif"],
    open_sans: ["open_sans", "sans-serif"],
    montserrat: ["montserrat", "sans-serif"],
    karla: ["karla", "sans-serif"],
    inconsolata: ["inconsolata", "sans-serif"],
  },

  plugins: [],
}

