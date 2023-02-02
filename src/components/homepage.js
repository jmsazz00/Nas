import React from "react";
import Hero from "./hero";
import History from "./history";
import Memories from "./memories";
import Looks from "./looks";
import Energizer from "./energizer";

function Homepage(props) {
  return (
    <main>
      <Hero />
      <History />
      <Memories />
      <Looks />
      <Energizer />
    </main>
  );
}

export default Homepage;
