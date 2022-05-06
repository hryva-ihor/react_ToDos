import React from "react";

export const themes = {
    light: {
        main: {
            color: "black",
        background: "bisque"},
        footer: {
            color: "black",
            background: "cadetblue"
        },
        header: {
            color: "black",
        background: "#22ecf0"},
        
    },
    dark: {
        main: {
            color: "rgb(0, 255, 123)",
            background: "rgb(13, 51, 108)"},
        footer: {
            color: "#db0b2e",
            background: "#052120"
        },
        header: {
            color: "#22f0e9",
            background: "#a422f0"},
    }
    
};

// change theme
export const ThemeContext = React.createContext(themes.light);
