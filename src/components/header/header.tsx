import { useContext } from "react";
import { SettingsContext } from "../settings/SettingsProvider";
import "./header.css";

const Header = () => {
  const { setTheme, theme } = useContext(SettingsContext);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button className={theme} onClick={handleTheme}>
      Mode
    </button>
  );
};

export default Header;
// setTheme((theme) => {theme === "dark" ? "light" : "dark" } )
