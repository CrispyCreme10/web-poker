"use client";

import { useState } from "react";
import FindGameBox from "./FindGameBox";

/**
 * Component for setting up a local game or finding multiplayer game
 */
const Table = () => {
  const [players, setPlayers] = useState(0);

  const TABLE_SCALE = 10;
  const width = 96 * TABLE_SCALE;
  const height = 44 * TABLE_SCALE;
  const borderWidth = 0.5 * TABLE_SCALE;
  const background =
    "radial-gradient(circle, rgba(16,94,46,1) 0%, rgba(3,50,17,1) 100%)";

  const containerStyles: React.CSSProperties = {
    borderWidth: borderWidth * 3 + "px",
    borderStyle: "solid",
    borderColor: "#451e0d",
  };

  const tableStyles: React.CSSProperties = {
    width: width + "px",
    height: height + "px",
    borderWidth: borderWidth + "px",
    borderStyle: "solid",
    borderColor: "#c98b23",
    background,
  };

  const innerRingStyles: React.CSSProperties = {
    width: width * 0.75 + "px",
    height: height * 0.5 + "px",
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-black">
      <div className="rounded-full" style={containerStyles}>
        <div
          className="relative flex justify-center items-center rounded-full"
          style={tableStyles}
        >
          <div
            className="flex justify-center items-center rounded-full border-slate-500 border-2"
            style={innerRingStyles}
          >
            <div className="flex justify-center items-center gap-1 w-full">
              <div className="h-24 w-16 rounded-md border-slate-500 border-2"></div>
              <div className="h-24 w-16 rounded-md border-slate-500 border-2"></div>
              <div className="h-24 w-16 rounded-md border-slate-500 border-2"></div>
              <div className="h-24 w-16 rounded-md border-slate-500 border-2"></div>
              <div className="h-24 w-16 rounded-md border-slate-500 border-2"></div>
            </div>
          </div>

          {/* ADD PLAYER SLOTS */}
          <div className="absolute w-full h-full">
            <div
              className="absolute w-12 h-12 bg-slate-500 rounded-full"
              style={{
                top: "65px",
                left: "90px",
              }}
            ></div>
            <div
              className="absolute w-12 h-12 bg-slate-500 rounded-full"
              style={{
                top: "190px",
                left: "30px",
              }}
            ></div>
            <div
              className="absolute w-12 h-12 bg-slate-500 rounded-full"
              style={{
                top: "315px",
                left: "90px",
              }}
            ></div>
            <div
              className="absolute w-12 h-12 bg-slate-500 rounded-full"
              style={{
                top: "355px",
                left: "400px",
              }}
            ></div>
            <div
              className="absolute w-12 h-12 bg-slate-500 rounded-full"
              style={{
                top: "355px",
                left: "450px",
              }}
            ></div>
            <div
              className="absolute w-12 h-12 bg-slate-500 rounded-full"
              style={{
                top: "355px",
                left: "550px",
              }}
            ></div>
            <div
              className="absolute w-12 h-12 bg-slate-500 rounded-full"
              style={{
                top: "315px",
                right: "90px",
              }}
            ></div>
            <div
              className="absolute w-12 h-12 bg-slate-500 rounded-full"
              style={{
                top: "190px",
                right: "30px",
              }}
            ></div>
            <div
              className="absolute w-12 h-12 bg-slate-500 rounded-full"
              style={{
                top: "65px",
                right: "90px",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* <FindGameBox /> */}
    </div>
  );
};

export default Table;
