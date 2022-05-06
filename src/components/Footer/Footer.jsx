import { useContext } from "react";
import { ThemeContext } from "../../context/context";
import "./Footer.scss";

export const Footer = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <footer
      style={{
        background: currentTheme.footer.background,
      }}
      className="footer"
    >
      <p
        style={{
          color: currentTheme.footer.color,
        }}
      >
        Footer
      </p>
    </footer>
  );
};
