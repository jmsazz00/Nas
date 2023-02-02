import React, { useState, useEffect } from "react";
import { useCapitalizer } from "./../hooks/useCapitalizer";
import mems from "../mems.json";

const Memories = () => {
  const heading = "Engraved memories";
  let msg = useCapitalizer(heading);
  let [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) setIndex(mems.length - 1);
    if (index >= mems.length) setIndex(0);
  }, [index, mems]);

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex(index + 1);
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <section id="memories" className="block block--skewed-left block--dark">
      <div className="memories-block domain">
        <header className="block__header memories__header">
          <h1 className="block__heading history__heading">
            <span className="number-badge number-badge--primary">2</span>
            <p>{msg}</p>
          </h1>
        </header>
        <div className="memories__gallery">
          <span className="navigate" onClick={() => setIndex(index - 1)}>
            &lt;
          </span>
          <div className="memories__blocks">
            {mems.map((item, ind) => {
              let { src, text, type } = item;
              let pos = "nextSlide";
              if (ind === index) pos = "activeSlide";

              if (ind === index - 1 || (index === 0 && ind === mems.length - 1))
                pos = "lastSlide";

              return (
                <div className={"memories__pics " + pos}>
                  {type == "img" ? (
                    <picture className="memories__pic">
                      <source type="./jpg" src={src} />
                      <img src={src} />
                    </picture>
                  ) : (
                    <audio controls>
                      <source src={src} type="audio/mpeg" />
                    </audio>
                  )}
                  <footer className="memories__text">{text}</footer>
                </div>
              );
            })}
          </div>
          <span className="navigate" onClick={() => setIndex(index + 1)}>
            &gt;
          </span>
        </div>
      </div>
    </section>
  );
};

export default Memories;
