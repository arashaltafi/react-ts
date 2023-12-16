import { extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
    styles: {
        //global styles for all components
        global: {
            lineHeight: 1.5,
            fontSize: "16px",
            fontFamily: "Roboto",
            fontWeight: 400,
            color: 'white',
            backgroundColor: 'black',
            '*': {
                boxSizing: "border-box",
                margin: 0,
                padding: 0,    
            },
            body: {
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }
        }
    },
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
        title: "2rem",
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