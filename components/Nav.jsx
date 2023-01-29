import styles from "./nav.module.css";

export default function Nav({ changeTheme, currentTheme }) {
  function handleToggle() {
    if (currentTheme === "dark") {
      changeTheme("light");
      localStorage.setItem("theme", JSON.stringify("light"));
    } else {
      changeTheme("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    }
  }

  let themeStyle = {};
  if (currentTheme === "dark") {
    themeStyle = {
      link: "#f1f1f1",
      label: "#1cc8ff",
      button: "#232d38",
      headerBackground: "#232d38",
    };
  } else {
    themeStyle = {
      link: "#232d38",
      label: "#ff1c60",
      button: "#f1f1f1",
      headerBackground: "#f1f1f1",
    };
  }

  return (
    <header
      className={styles.header}
      style={{ background: themeStyle.headerBackground }}
    >
      <article>
        <nav>
          <ul>
            <li>
              <a href="#home" style={{ color: themeStyle.link }}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" style={{ color: themeStyle.link }}>
                ABOUT
              </a>
            </li>

            <li>
              <a href="#contact" style={{ color: themeStyle.link }}>
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        <div style={{ display: "flex" }}>
          <input
            className={styles.themeToggle}
            id="themeToggle"
            type="checkbox"
            onChange={handleToggle}
          />
          <label
            className={styles.themeToggleLabel}
            htmlFor="themeToggle"
            style={{ backgroundColor: themeStyle.label }}
          >
            <span
              className={styles.themeToggleButton}
              style={{ backgroundColor: themeStyle.button }}
            />
          </label>
        </div>
      </article>
    </header>
  );
}
