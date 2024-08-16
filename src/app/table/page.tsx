"use client";

import { useState } from "react";
import AddPlayerButton from "./AddPlayerButton";
import { Player } from "../../models/Player";
import AddPlayerBox from "./AddPlayerBox";
import TableSettingsBox from "./TableSettingsBox";

export type PlayerSpotPositionType = {
  top?: number;
  left?: number;
  right?: number;
};

/**
 * Component for setting up a local game or finding multiplayer game
 */
const Table = () => {
  const playerSpotPositions: PlayerSpotPositionType[] = [
    { top: 65, left: 90 },
    { top: 190, left: 30 },
    { top: 315, left: 90 },
    { top: 355, left: 265 },
    { top: 355, left: 450 },
    { top: 355, left: 635 },
    { top: 315, right: 90 },
    { top: 190, right: 30 },
    { top: 65, right: 90 },
  ];

  const [players, setPlayers] = useState<(Player | undefined)[]>(
    Array.from({ length: playerSpotPositions.length }).map(() => undefined)
  );
  const [playersConfirmed, setPlayersConfirmed] = useState<boolean[]>(
    Array.from({ length: playerSpotPositions.length }).map(() => false)
  );

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

  const showPlayerAddBox = (playerSpotPosIndex: number) => {
    addPlayer(playerSpotPosIndex);
  };

  const addPlayer = (playerSpotPosIndex: number) => {
    if (players[playerSpotPosIndex]) {
      return;
    }

    const newPlayers = [...players];
    newPlayers[playerSpotPosIndex] = new Player();
    setPlayers(newPlayers);
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
          {/* ADD PLAYER BOXES */}
          <div className="absolute flex justify-center items-center w-full h-full">
            {playerSpotPositions.map(
              (playerSpotPosition, index) =>
                !players[index] && (
                  <AddPlayerButton
                    key={index}
                    playerSpotPosition={playerSpotPosition}
                    clickHandler={() => showPlayerAddBox(index)}
                  />
                )
            )}
            <TableSettingsBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
