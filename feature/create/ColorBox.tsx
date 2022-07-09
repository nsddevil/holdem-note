import React, { useState } from "react";
import { colorList } from "../../lib/colors";
import { ColorType } from "../../types";

interface ColorBoxProps {
  color: ColorType;
  setColor: React.Dispatch<React.SetStateAction<ColorType>>;
}

function ColorBox({ color, setColor }: ColorBoxProps) {
  const [isColor, setIsColor] = useState(false);
  const onSetColor = (colorType: ColorType) => {
    setColor(colorType);
    setIsColor(false);
  };
  return (
    <ul className="flex flex-col gap-2 relative">
      <li
        className={`p-3 ${colorList[color]}  border cursor-pointer text-lg text-white
        rounded text-center`}
        onClick={() => setIsColor((prev) => !prev)}
      >
        Select Color
      </li>
      {isColor && (
        <div className="absolute left-0 top-16 w-full flex flex-col gap-2 ease-in duration-200 ">
          <li
            className="p-5 bg-red-600 cursor-pointer rounded"
            onClick={() => onSetColor("red")}
          ></li>
          <li
            className="p-5 bg-blue-600 cursor-pointer rounded"
            onClick={() => onSetColor("blue")}
          ></li>
          <li
            className="p-5 bg-yellow-300 cursor-pointer rounded"
            onClick={() => onSetColor("yellow")}
          ></li>
          <li
            className="p-5 bg-green-500 cursor-pointer rounded"
            onClick={() => onSetColor("green")}
          ></li>
          <li
            className="p-5 bg-gray-500 cursor-pointer rounded"
            onClick={() => onSetColor("gray")}
          ></li>
        </div>
      )}
    </ul>
  );
}

export default ColorBox;
