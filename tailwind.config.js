/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    keyframes: {
      pulseAndMove: {
        "0%, 100%": {
          transform: "translateY(0) scale(0.8)",
          opacity: "0.5",
        },
        "50%": {
          transform: "translateY(-15px) scale(1)",
          opacity: "1",
        },
      },
    },
    animation: {
      pulseAndMove: "pulseAndMove 1.5s ease-in-out infinite",
    },
  },
};
export const plugins = [];
