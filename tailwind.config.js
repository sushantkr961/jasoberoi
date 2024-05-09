/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/assets/background.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: {
        poppins: ["Poppins"],
        'great-vibes': ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
};
