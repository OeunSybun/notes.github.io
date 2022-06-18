import { useState } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import { MdOutlineColorLens } from "react-icons/md";

export default function Note({ id, note, setNotes, setNoteText }) {
  const [counter, setCounter] = useState(0);
  const color = [
    "bg-yellow-400",
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-lime-400",
    "bg-gray-400",
  ];
  function changeBgColor() {
    setCounter((prevValue) => (prevValue >= 5 ? 0 : ++prevValue));
  }
  function handleDelete() {
    setNotes((prevValue) => prevValue.filter((value, index) => index !== id));
  }

  return (
    <div className={"note " + color[counter]}>
      <span className="break-words overflow-x-auto">{note.text}</span>
      <div className="note-footer">
        <small className="justify-start">{note.date}</small>
        <div className="flex">
          <MdOutlineColorLens
            className="button-hover mr-3"
            size="1.3rem"
            onClick={changeBgColor}
          />
          <RiEditLine
            className="button-hover mr-3"
            size="1.3rem"
            onClick={() => {
              setNoteText(note.text);
              handleDelete();
            }}
          />
          <RiDeleteBin6Line
            className="button-hover"
            size="1.3rem"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
