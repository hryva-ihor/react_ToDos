import "./App.scss";
import { Main} from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
import { ThemeContext, themes } from "./context/context";


function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const toggleTheme = () => {
    let newTheme = currentTheme === themes.light ? themes.dark : themes.light;
    setCurrentTheme(newTheme);
  };
  return (
      <div className="wrapper">

        <ThemeContext.Provider value={{currentTheme,toggleTheme}}>
          <Header />
          <Main />
          <Footer />
        </ThemeContext.Provider>
      </div>
  );
}

export default App;
