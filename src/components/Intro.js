import React from "react";
import background from "./img1.jpeg";

function Intro() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height:"400px"
      }}
    >
      <h1
        style={{
          color: "white",
        }}
      >
        Crypto Currency
      </h1>
    </div>
  );
}

export default Intro;
