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
    typography: {
      DEFAULT: {
        css: {
          lineHeight: "1.25",
          table: {
            width: "100%",
            borderCollapse: "collapse",
          },
          th: {
            backgroundColor: "#f3f4f6",
            fontWeight: "600",
            padding: "0.75rem",
            border: "1px solid #e5e7eb",
          },
          td: {
            padding: "0.75rem",
            border: "1px solid #e5e7eb",
          },
        },
      },
    },
  },
};

export const plugins = [
  require("@tailwindcss/typography"),
  require("tailwind-scrollbar-hide"),
];
