"use client";

import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Club \u{1F64C}",
          "Team \u{1F3C8}",
          "Event \u{1F389}",
          "Activity \u{1F3C2}",
          "Class \u{1F3BB}",
          "Group \u{1F3AE}", 
          "Trip \u{1F6EB}"
        ],
        autoStart: true,
        loop: true,
        delay: 35
      }}
    />
  );
};







export default TypeWriter;
