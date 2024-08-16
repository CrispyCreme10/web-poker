import React from "react";
import { FaPlus } from "react-icons/fa";
import { PlayerSpotPositionType } from "./page";

const AddPlayerButton = ({
  playerSpotPosition,
  clickHandler,
}: {
  playerSpotPosition: PlayerSpotPositionType;
  clickHandler?: () => void;
}) => {
  let styles: React.CSSProperties = {};
  const { top, left, right } = playerSpotPosition;

  if (top !== undefined) {
    styles.top = top + "px";
  }

  if (left !== undefined && right === undefined) {
    styles.left = left + "px";
  }

  if (right !== undefined && left === undefined) {
    styles.right = right + "px";
  }

  return (
    <div
      className="absolute flex justify-center items-center w-12 h-12 border-slate-500 border-2 rounded-full 
      group hover:bg-slate-500 hover:cursor-pointer"
      style={styles}
      onClick={clickHandler}
    >
      <FaPlus className="text-slate-500 group-hover:text-white" />
    </div>
  );
};

export default AddPlayerButton;
