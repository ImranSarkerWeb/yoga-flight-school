import { useState, useEffect } from "react";
import { CgSun, CgMoon } from "react-icons/cg";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", currentTheme);
    } else {
      setIsDarkMode(false);
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="theme-toggle">
      <button
        className="theme-toggle-button"
        onClick={toggleDarkMode}
        aria-label="Toggle Theme"
      >
        {isDarkMode ? <CgMoon /> : <CgSun />}
      </button>
    </div>
  );
};

export default ThemeToggle;
