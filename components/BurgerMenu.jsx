import styles from "./burgermenu.module.css";

export default function BurgerMenu({ currentTheme, setIsMenuOpen, classID }) {
  const menuTheme = `${currentTheme}Menu`;
  const test = `${classID}Menu`;

  function closeMenu() {
    setIsMenuOpen(false);
  }
  return (
    <div className={`${styles.mobileMenu} ${test}`} id={menuTheme}>
      <button onClick={closeMenu}>Close</button>
      <ul>
        <li>
          <a href="#top" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
