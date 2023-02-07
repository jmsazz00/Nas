import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useCapitalizer } from "./../hooks/useCapitalizer";
import cmds from "../commands.json";

function Proposal(props) {
  let heading = "The sacred commands";
  let msg = useCapitalizer(heading);

  let [index, setIndex] = useState(0);
  let [showQuest, setShowQuest] = useState(false);
  let [answer, setAnswer] = useState("");

  let handleClick = () => {
    setIndex(index + 1);
    if (index === cmds.length - 2) setShowQuest(true);
  };

  let handleInput = (ev) => {
    setAnswer(ev.target.getAttribute("content"));
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    console.log(answer);
    if (answer === "yes") toast.success("I'll think about it...");
    else toast.error("Bteswe ay*e");
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="block block--stone">
      <div className="proposal-block container">
        <header className="block__header">
          <h1 className="block__heading" data-aos="fade-down">
            <p>{msg}</p>
          </h1>
        </header>
        <div className="proposal__intro">
          <p className="proposal__hist" data-aos="fade-left">
            //&nbsp; On Mount Sinaa' in Egypt, Moses encountered the sacred
            commandments, thought to be descended from God himself, carved on a
            gigantic limestone. He then pleaded mankind to follow them in their
            daily lives; here they are: &nbsp;//
          </p>
          <div
            class="proposal__commands"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <ol className="proposal__list">
              {cmds.map((cmd, ind) => {
                let className = "";
                if (ind <= index) className = "cmd--show";
                return (
                  <li
                    id={"cmd" + ind}
                    className={"proposal__list-item " + className}
                  >
                    {cmd.cmd}
                  </li>
                );
              })}
            </ol>
            {index < cmds.length - 1 && (
              <button onClick={handleClick} className="proposal__btn">
                <a href={"#cmd" + (index - 1)}>Next</a>
              </button>
            )}
          </div>
        </div>
        {showQuest && (
          <div>
            <div class="proposal__quest" data-aos="zoom-in">
              <h1>Will you LIGHT UP my night at prom?</h1>
            </div>
            <form onSubmit={handleSubmit} class="proposal__ans">
              <div class="proposal__options">
                <div class="form-group" data-aos="fade-right">
                  <input
                    content="yes"
                    onChange={(ev) => handleInput(ev)}
                    name="ans"
                    type="radio"
                    id="opt1"
                  ></input>
                  <label htmlFor="opt1">Yes</label>
                </div>
                <span>OR</span>
                <div class="form-group" data-aos="fade-left">
                  <input
                    content="no"
                    onChange={(ev) => handleInput(ev)}
                    name="ans"
                    type="radio"
                    id="opt2"
                  ></input>
                  <label htmlFor="opt2">No</label>
                </div>
              </div>
              <button
                disabled={!answer || false}
                onClick={handleSubmit}
                type="submit"
                className="proposal__btn"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export default Proposal;
