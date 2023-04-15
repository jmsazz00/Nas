import React, { useEffect } from "react";

function HeadUp(props) {
  let div = document.getElementById("head-up");
  let lastKnownScrollPosition = 0,
    lastScrollTop = 0;

  useEffect(() => {
    let ticking = false;

    function doSmthg(show) {
      if (show) div.style.opacity = "1";
      else div.style.opacity = "0";
    }

    document.addEventListener(
      "scroll",
      () => {
        lastKnownScrollPosition = window.scrollY;
        let st = document.documentElement.scrollTop;

        if (!ticking) {
          let show =
            lastKnownScrollPosition > window.innerHeight && st < lastScrollTop;
          console.log(show);
          window.requestAnimationFrame(() => {
            return setTimeout(() => {
              doSmthg(show);
              ticking = false;
            }, 100);
          });

          ticking = true;
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      true
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
