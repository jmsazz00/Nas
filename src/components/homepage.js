import React from "react";
import Hero from "./hero";
import History from "./history";
import Memories from "./memories";
import Looks from "./looks";
import Energizer from "./energizer";
import HeadUp from "./head-up";

function Homepage(props) {
  return (
    <main>
      <HeadUp />
      <Hero />
      <History />
      <Memories />
      <Looks />
      <Energizer />
    </main>
  );
}

export default Homepage;
