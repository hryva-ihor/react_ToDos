import "./App.scss";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
// import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
// import { ThemeContext, themes } from "./context/context";
import { BrowserRouter } from "react-router-dom";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";

function App() {
  // const [currentTheme, setCurrentTheme] = useState(themes.light);
  // const toggleTheme = () => {
  //   let newTheme = currentTheme === themes.light ? themes.dark : themes.light;
  //   setCurrentTheme(newTheme);
  // };
  const [darkMode, setDarkMode] = useState(false);
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const backgroundColor = (darkMode) => {
    return darkMode
      ? { backgroundColor: "#78909c" }
      : { backgroundColor: "transparent" };
  };
  return (
    <BrowserRouter>
      <Box style={backgroundColor(darkMode)} className="wrapper">
        {/* <ThemeContext.Provider value={{currentTheme,toggleTheme}}> */}
        <Container sx={{ p: 0 }}>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Header setDarkModeProps={{ setDarkMode, darkMode }} />
            <Main />
            {/* <Footer /> */}
          </ThemeProvider>
        </Container>
        {/* </ThemeContext.Provider> */}
      </Box>
    </BrowserRouter>
  );
}

export default App;
