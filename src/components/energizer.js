import React from "react";
import { Link } from "react-router-dom";
import { useCapitalizer } from "./../hooks/useCapitalizer";

function Energizer(props) {
  let heading = "Are you ready?";
  let msg = useCapitalizer(heading);

  return (
    <section id="surp" className="block block--lightgray">
      <div className="surp-block container">
        <header className="block__header surp__header">
          <h1 className="block__heading surp__heading">
            <span className="number-badge number-badge--primary">4</span>
            <p>{msg}</p>
          </h1>
        </header>
        <div className="surp__content">
          <div class="surp__text">
            <p className="surp__nick" data-aos="fade-right" data-aos-duration="1000">blinking&#128521;</p>
            <p className="surp__warning" data-aos="flip-down">
              I hope you learn that Timing is always prominent: don't rush
              things; Trust the process.
              <br />
              Remember: "Patience is KEY".
            </p>
            <p className="surp__nick" data-aos="fade-left" data-aos-duration="1000">thrice&#128521;&#128521;</p>
          </div>
          <div className="surp__btn">
            <p>Click</p>
            <Link to="surp" className="pulse"></Link>
            <p>Here</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Energizer;
