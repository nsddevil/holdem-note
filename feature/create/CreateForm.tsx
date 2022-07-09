import React, { FormEvent, useEffect, useRef, useState } from "react";
import { MdDelete, MdChangeCircle } from "react-icons/md";
import { ColorType } from "../../types";
import ColorBox from "./ColorBox";

function CreateForm() {
  const [player, setPlayer] = useState("");
  const [color, setColor] = useState<ColorType>("purple");
  const [body, setBody] = useState("");
  const createRef = useRef<HTMLInputElement>(null);

  const onSaveNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ player, color, body });
  };

  useEffect(() => {
    if (createRef) {
      createRef.current?.focus();
    }
  }, []);
  return (
    <div className="h-[calc(100vh-6rem)] flex items-center justify-center">
      <form
        className="w-[360px] flex flex-col gap-4 p-4 shadow-lg shadow-purple-200"
        onSubmit={onSaveNote}
      >
        <div className="flex gap-4 items-center justify-center border">
          <input
            ref={createRef}
            className="w-full p-4 text-lg flex-1"
            type="text"
            name="player"
            placeholder="Player Name"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          />
          <MdChangeCircle
            size={40}
            className="text-orange-400 mx-2 cursor-pointer hover:scale-110"
          />
        </div>
        <div className="relative">
          <ColorBox color={color} setColor={setColor} />
        </div>
        <textarea
          className="w-full p-4 border text-lg resize-none"
          name="body"
          placeholder="notes.."
          rows={8}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <div className="flex gap-4">
          <button
            type="button"
            className="p-4 py-2 rounded bg-red-500 text-white hover:scale-105"
          >
            <MdDelete size={30} />
          </button>
          <button
            type="submit"
            className="p-4 py-2 flex-1 rounded bg-purple-500 text-white hover:scale-105"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
