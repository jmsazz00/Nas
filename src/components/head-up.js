import React, { useEffect } from "react";

function HeadUp(props) {
  let div = document.getElementById("head-up");

  let lastKnownScrollPosition = 0,
    lastScrollTop = 0;
  let ticking = false;

  useEffect(() => {
    document.addEventListener(
      "scroll",
      () => {
        lastKnownScrollPosition = window.scrollY;
        let st = window.pageYOffset || document.documentElement.scrollTop;

        if (!ticking) {
          let show =
            lastKnownScrollPosition > window.innerHeight && st > lastScrollTop;
          window.requestAnimationFrame(() =>
            setTimeout(() => {
              if (show) div.style.opacity = "1";
              else div.style.opacity = "0";
              ticking = false;
            }, 100)
          );

          ticking = true;
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      false
    );
  }, []);

  return (
    <div
      id="head-up"
      className="icon-container"
      onClick={() => window.scroll(0, 0)}
    >
      <span>V</span>
    </div>
  );
}

export default HeadUp;
