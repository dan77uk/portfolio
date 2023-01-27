import { slide as Menu } from "react-burger-menu";

export default function BurgerMenu({ currentTheme }) {
  let bars,
    menuWrap,
    crossColor = "";
  if (currentTheme === "dark") {
    bars = "#e1e4e8";
    menuWrap = "#2a384c";
    crossColor = "#242f3f";
  } else {
    bars = "#242f3f";
    menuWrap = "#EDEDED";
    crossColor = "#e1e4e8";
  }
  const styles = {
    bmBurgerBars: {
      background: bars,
      borderRadius: "10px",
    },

    bmCrossButton: {
      background: bars,
    },
    bmCross: {
      margin: "-1px 0 0 1px",
      background: crossColor,
    },

    bmMenu: {
      background: menuWrap,
      padding: "50px",
    },
    menuItem: {
      border: "solid",
      background: "red",
    },
  };

  return (
    <Menu styles={styles} right>
      <div>
        <ul>
          <li>
            <a className="menu-item" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="menu-item" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="menu-item" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="menu-item" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </Menu>
  );
}
