import { useEffect, useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import Search from "./components/Search";
export default function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNote = JSON.parse(localStorage.getItem("react-mynotes-app"));
    if (savedNote) {
      setNotes(savedNote);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("react-mynotes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <Header />
      <div className="pl-[30px] pr-[30px]">
        <Search setSearchText={setSearchText} />
        <div className="note-container">
          {notes
            .filter((note) =>
              note.text.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((note, index) => (
              <Note
                id={index}
                key={index}
                note={note}
                setNotes={setNotes}
                setNoteText={setNoteText}
              />
            ))}
          <CreateNote
            setNotes={setNotes}
            noteText={noteText}
            setNoteText={setNoteText}
          />
        </div>
      </div>
    </div>
  );
}
