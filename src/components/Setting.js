import { useState } from "react";

export default function Setting({ notes, setNotes }) {
  const [editNoteId, setEditNoteId] = useState(null);
  const [editText, setEditText] = useState("");

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const startEdit = (note) => {
    setEditNoteId(note.id);
    setEditText(note.text);
  };

  const saveNote = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, text: editText } : note
      )
    );
    setEditNoteId(null);
    setEditText("");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Settings - Manage Notes</h1>
      {notes.length === 0 && <p className="text-gray-500">No notes found.</p>}

      {notes.map((note) => (
        <div
          key={note.id}
          className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2"
        >
          {editNoteId === note.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border rounded px-2 py-1 w-full"
              />
              <button
                onClick={() => saveNote(note.id)}
                className="ml-2 px-2 py-1 bg-green-500 text-white rounded"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span>{note.text}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(note)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
