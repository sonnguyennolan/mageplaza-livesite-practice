module.exports = {
    darkMode: "class",
    content: [
        "./_includes/**/*.{html,js}",
        "./_layouts/**/*.{html,js}",
        "./_pages/**/*.{html,md}",
        "./index.html",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#001489", // Dark blue from image
                secondary: "#0cb6e9", // Light blue from image
                accent: "#ff5733", // Orange color for accents
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            width: {
                82: "82%",
                75: "75%",
                "w-100": "30rem",
            },
            height: {
                82: "82%",
                75: "75%",
                "h-100": "30rem",
            },
            padding: {
                15: "4rem", // 72px (nếu 1rem = 16px)
            },
        },
    },
    plugins: [],
};
