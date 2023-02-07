import React from "react";
import { useCapitalizer } from "./../hooks/useCapitalizer";

const Looks = () => {
  let heading = "Future looks";
  let msg = useCapitalizer(heading);

  return (
    <section id="looks" className="block block--mixedgray">
      <div className="looks-block domain">
        <header className="block__header">
          <h1 className="block__heading" data-aos="fade-down">
            <span className="number-badge number-badge--primary">3</span>
            <p>{msg}</p>
          </h1>
        </header>
        <div className="looks__images">
          <div className="looks__block">
            <picture className="looks__img" data-aos="fade-right">
              <source type="./jpg" src="../images/dcr.jpg" />
              <source type="./webp" src="../images/dcr.webp" />
              <img src="../images/dcr.jpg" />
            </picture>
            <p className="looks__text" data-aos="fade-left">
              James, a 35-years-old neurologist, exhausted because of the
              lunatic patients that visit him daily, but still always optimistic
              and cheerful: trying his best to diagnose their case, thus make
              the world a better place&#128519;.
              <span className="left--arrow">&lt;-</span>
            </p>
          </div>
          <div className="looks__block">
            <picture className="looks__img" data-aos="fade-left">
              <source type="./jpg" src="../images/ce.jpg" />
              <source type="./webp" src="../images/ce.webp" />
              <img src="../images/ce.jpg" />
            </picture>
            <p className="looks__text" data-aos="fade-right">
              Nas, an elegant dignified woman, fulfilling her dream and working
              as a chief executive officer (CEO) in one of the most renowned
              companies in the world, earning an average of $200K/year; which is
              still kinda low for her majesty&#128522;.
              <span className="right--arrow">-&gt;</span>
            </p>
          </div>
          <div className="looks__block">
            <picture className="looks__img" data-aos="fade-right">
              <source type="./webp" src="../images/old.webp" />
              <source type="./jpg" src="../images/old.jpg" />
              <img src="../images/old.jpg" />
            </picture>
            <p className="looks__text" data-aos="fade-left">
              It's 2075, these two friends, having accomplished so many
              achievements in their dream life, gather again and enjoy dinner
              together; against all odds still united thanks to the pact they
              made to remain friends forever&#128515;.
              <span className="left--arrow">&lt;-</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Looks;
