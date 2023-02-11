import React, { useEffect } from "react";

function HeadUp(props) {
  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    function doSomething(scrollPos) {
      let div = document.getElementById("head-up");
      if (scrollPos > window.innerHeight) {
        div.style.opacity = "1";

        setTimeout(() => {
          div.style.opacity = "0";
        }, 5000);
      } else {
        div.style.opacity = "0";
      }
    }

    document.addEventListener("scroll", (event) => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          doSomething(lastKnownScrollPosition);
          ticking = false;
        });

        ticking = true;
      }
    });
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
