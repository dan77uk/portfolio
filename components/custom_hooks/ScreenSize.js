import { useState, useEffect } from "react";

export const ScreenSize = () => {
  const [width, setWidth] = useState({ width: undefined });
  useEffect(() => {
    function handleResize() {
      setWidth({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
