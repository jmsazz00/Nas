import React, { useEffect } from "react";

function HeadUp(props) {
  let lastKnownScrollPosition = 0,
    lastScrollTop = 0;

  useEffect(() => {
    let ticking = false;

    function doSmthg(show) {
      let div = document.getElementById("head-up");
      if (show) div.style.opacity = "1";
      else div.style.opacity = "0";
    }

    document.addEventListener(
      "scroll",
      () => {
        lastKnownScrollPosition = window.scrollY;
        let st = document.documentElement.scrollTop;
        let show;

        if (!ticking) {
          show =
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
        lastScrollTop = st <= 0 ? 0 : show ? st + 0.01 : st;
        // for some reason the event fires 2 times, so to make it true 2 times
        // we set the lastScroll slightly higher than st because it will equal it
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
