import React, { useState } from "react";
import { useCapitalizer } from "../hooks/useCapitalizer";
import { TbFriends } from "react-icons/tb";
import { GiPiercedHeart } from "react-icons/gi";

const History = () => {
  const heading = "How it all started";
  let msg = useCapitalizer(heading);

  const style = { color: "#2584ff", fontSize: "1.75em" };

  let [quoteVisible, setQuoteVisible] = useState(false);

  return (
    <section id="history" className="block">
      <div className="history-block container domain">
        <header className="block__header history__header">
          <h1 className="block__heading history__heading" data-aos="fade-down">
            <span className="number-badge number-badge--primary">1</span>
            <p>{msg}</p>
          </h1>
        </header>
        <div className="history__text">
          <div className="media" data-aos="fade-right">
            <div className="media__icon">
              <span className="icon-container icon-container--primary">
                <TbFriends style={style} />
              </span>
            </div>
            <div className="media__content">
              <h3 className="media__title">A Golden Hour</h3>
              <p className="media__text">
                Who would ever think that by -RANDOMLY- sitting next to a boy
                during an english hour on Monday morning at school, a girl would
                develop such a firm substantial bond with him; he who keeps
                clinging on to her and won't bear if this connection got aborted
                one day (sincerely dreading that day).
              </p>
            </div>
          </div>
          <div className="media" data-aos="fade-left">
            <div className="media__icon">
              <span className="icon-container icon-container--primary">
                <GiPiercedHeart style={style} />
              </span>
            </div>
            <div className="media__content">
              <h3 className="media__title">An Angelic Impression</h3>
              <p className="media__text">
                Having found numerous goals in common, they gradually begin to
                strengthen their familiarity by each day passing, although the
                boy didn't take it this much seriously, yet he eventually
                realized that this girl seemed exactly like his angel sent from
                above (DEIFIED her).
                <br />
                <a
                  id="quote"
                  href="#quote"
                  onClick={() => setQuoteVisible(!quoteVisible)}
                >
                  This quote
                </a>{" "}
                is for her:(click you dumb!)
              </p>
            </div>
          </div>
        </div>
        <footer
          className={"history__footer " + (quoteVisible ? "show-quote" : "")}
        >
          <h2 className="history__quote">
            Lying on your shoulders is the most intricate organ in the known
            universe
          </h2>
        </footer>
      </div>
    </section>
  );
};

export default History;
