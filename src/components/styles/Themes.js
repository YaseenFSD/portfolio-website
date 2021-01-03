import { createMuiTheme } from "@material-ui/core/styles"


export const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#00FFFF",
        },
        secondary: {
            main: "#1e1e1e",
        },
        text: {
            primary: "FFF",
            secondary: "000"
        }
    }
})

export const lightTheme = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#8068f7"
        },
        secondary: {
            main: "#FFF"
        },
        text: {
            primary: "FFF",
            secondary: "000"
        }
    }
})