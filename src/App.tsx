import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import JordanButton from "./JordanButton";

// Hey Sara, here's where you can learn how to do this all:
// Follow this course: https://scrimba.com/learn-react-c0e
// It's roughly ~10 hours to get through

// Also, the point of these functions is to let you organize your html
// and to let you modulate your html (so your code is DRY, aka DONT REPEAT YOURSELF)
// as an exmaple of how to do this, I've added a component called JordanButton

// remember to get started you'll open a terminal, navigate to SaraProject, and run the command:
// npm run dev

function App() {
  return (
    <>
      <button> hey I'm a button</button>
      <JordanButton
        buttonName={"AH"}
        consoleText={"DISPLAY THIS WHEN CLICKED"}
      />
      <JordanButton buttonName={"Blah"} />
      <JordanButton buttonName={"BOOBIES"} />
      <JordanButton buttonName={"CRAP"} />
      <JordanButton buttonName={"DONT CLICK ME PLS"} />
    </>
  );
}

export default App;
