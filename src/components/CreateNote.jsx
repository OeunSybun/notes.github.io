import { useState } from "react";
import { Today } from "../Date";
import { RiAddBoxLine } from "react-icons/ri";
export default function CreateNote({ setNotes, noteText, setNoteText }) {
  const [remaining, setRemaining] = useState(1000);

  function handleChange(event) {
    const value = event.target.value;
    if (1000 - value.length >= 0) {
      setNoteText(value);
    }
  }

  function handleClick() {
    setNotes((prevValue) => [
      ...prevValue,
      {
        text: noteText,
        date: Today.day + "/" + Today.month + "/" + Today.year,
      },
    ]);
    setRemaining(1000);
    setNoteText("");
  }

  return (
    <div className="note bg-cyan-300">
      <textarea
        className="outline-none border-none resize-none bg-cyan-300 placeholder-gray-500"
        rows="8"
        placeholder="Take a note..."
        value={noteText}
        onChange={handleChange}
        autoFocus
      />
      <div className="note-footer">
        <small>{noteText.length>0?remaining-noteText.length:remaining} Remaining</small>
        <RiAddBoxLine
          className="button-hover"
          size="1.6rem"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
