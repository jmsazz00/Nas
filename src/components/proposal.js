import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useCapitalizer } from "./../hooks/useCapitalizer";
import { AiFillLike } from "react-icons/ai";
import cmds from "../commands.json";

function Proposal(props) {
  let heading = "The sacred commands";
  let msg = useCapitalizer(heading);
  let left = useRef();
  let right = useRef();

  let [index, setIndex] = useState(0);
  let [showQuest, setShowQuest] = useState(false);
  let [answer, setAnswer] = useState("");

  const style = { color: "#fff", fontSize: "3em" };

  let handleClick = () => {
    setIndex(index + 1);
    if (index === cmds.length - 2) {
      setShowQuest(true);
      setTimeout(() => {
        window.scrollBy(0, window.screen.height);
      }, 4500);
    }
  };

  let handleInput = (ev) => {
    setAnswer(ev.target.getAttribute("content"));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let leftElement = left.current.classList;
    let rightElement = right.current.classList;

    if (answer === "yes") toast.success("I'll think about it..");
    else toast.error("Bteswe ayre");

    if (answer === "yes") {
      if (leftElement.contains("error")) {
        leftElement.remove("error");
        rightElement.remove("error");
      }
      leftElement.add("success");
      rightElement.add("success");
    } else {
      if (leftElement.contains("success")) {
        leftElement.remove("success");
        rightElement.remove("success");
      }
      leftElement.add("error");
      rightElement.add("error");
    }

    leftElement.add("like-move-left");
    rightElement.add("like-move-right");
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
            daily lives; here they are:
          </p>
          <div
            className="proposal__commands"
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
          <div style={{ position: "relative" }}>
            <span className="likes icon-container" ref={right}>
              <AiFillLike style={style} />
            </span>
            <span className="likes icon-container" ref={left}>
              <AiFillLike style={style} />
            </span>
            <div className="proposal__quest" data-aos="zoom-in">
              <h1>Will you LIGHT UP my night at prom?</h1>
            </div>
            <form onSubmit={handleSubmit} className="proposal__ans">
              <div className="proposal__options">
                <div className="form-group" data-aos="fade-right">
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
                <div className="form-group" data-aos="fade-left">
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
