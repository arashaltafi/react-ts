import { extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
    colors: {
        transparent: "transparent",
        primary: {
            100: "#171D38",
            backgroundHover: "#163963",
        },
        secondary: {
            100: '#fff'
        },
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },
    },
    fontSizes: {
        title: "1.5rem",
        subtitle: "1.25rem",
    },
    breakPoints: {
        mobile: "425px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px"
    }
})

export default chakraTheme