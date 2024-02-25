// icon:support | System UIcons https://systemuicons.com/ | Corey Ginnivan
import * as React from "react";

function IconHelp(props) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1.4em"
      width="1.4em"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18.5 10.5 A8 8 0 0 1 10.5 18.5 A8 8 0 0 1 2.5 10.5 A8 8 0 0 1 18.5 10.5 z" />
        <path d="M14.5 10.5 A4 4 0 0 1 10.5 14.5 A4 4 0 0 1 6.5 10.5 A4 4 0 0 1 14.5 10.5 z" />
        <path d="M13.5 7.5L16 5M13.5 13.5L16 16M7.5 13.5L5 16M7.5 7.5L5 5" />
      </g>
    </svg>
  );
}

export default IconHelp;
