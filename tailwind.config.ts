import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        black: "#202020",
        gray: "#d4d4d4",
        graydarker: "#AEAEAE",
        grayborder: "rgb(174,174,174,40%)",
        graybg: "rgb(174,174,174,20%)",
        grayhover: "rgb(174,174,174,30%)",
        graydisabled: "rgb(174,174,174,10%)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      padding: {
        shorter4: "1vw",
        shorter3: "2vw",
        shorter2: "3vw",
        shorter: "4vw",
        normal: "6vw",
        longer: "8vw",
        longer2: "10vw",
        longer3: "12vw",
        longer4: "14vw",
        longer5: "16vw",
        longer6: "18vw",
        longer7: "20vw",
        longer8: "22vw",
        longer9: "24vw",
        longer10: "26vw",
      },
      margin: {
        shorter4: "1vw",
        shorter3: "2vw",
        shorter2: "3vw",
        shorter: "4vw",
        normal: "6vw",
        longer: "8vw",
        longer2: "10vw",
        longer3: "12vw",
        longer4: "14vw",
        longer5: "16vw",
        longer6: "18vw",
        longer7: "20vw",
        longer8: "22vw",
        longer9: "24vw",
        longer10: "26vw",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        default: [...fontFamily.sans],
      },
      screens: {
        "3xl": "2056px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".animate": {
          transition: "all 300ms",
        },
        ".animate-longer": {
          transition: "all 500ms",
        },

        // for absolute or fixed positions
        ".centered": {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".centered-bottom": {
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
        },
        ".centered-top": {
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
        },
        ".centered-left": {
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
        },
        ".centered-right": {
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
        },
        ".centered-horizontal": {
          left: "50%",
          transform: "translateX(-50%)",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
