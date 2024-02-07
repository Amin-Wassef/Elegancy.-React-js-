import { transform } from "framer-motion";
import React, { useEffect, useState } from "react";

const ScrollOverlay = ({ backgroundImage, Y, children, height, scroll }) => {
  const [scrollPosition, setScrollPosition] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < Y) {
        setScrollPosition(scroll);
      } else {
        setScrollPosition(window.scrollY);
      }

      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <img
        className="scroll-overlay"
        src={backgroundImage}
        alt="img"
        style={{
          transform: `translateY(-${scrollPosition}px)`,
          height: height,
        }}
      />
      <div className="overlay-content">{children}</div>
    </>
  );
};

export default ScrollOverlay;
