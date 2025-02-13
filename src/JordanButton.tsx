import React from "react";

interface JordanButtonProps {
  buttonName: string;
  consoleText?: string;
}

// IN TERMINAL CONTROL C WILL EXIT OUT OF IT, esp. useful when it's running your app

const DEFAULT_CONSOLE_TEXT = "HEY I WAS CLICKED AAAHHH!";
export default function JordanButton({
  buttonName,
  consoleText,
}: JordanButtonProps) {
  return (
    <div>
      <button
        style={{ width: "200px", margin: "10px" }}
        onClick={() => {
          // You can view this console log by right clicking the page and clicking the inspect option
          console.log(`${consoleText ?? DEFAULT_CONSOLE_TEXT}`);
        }}
      >
        {buttonName}
      </button>
    </div>
  );
}
