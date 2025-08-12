import { useState } from "react";
import { PencilIcon, TrashIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

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
    if (editText.trim() === "") return;
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, text: editText } : note
      )
    );
    setEditNoteId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditNoteId(null);
    setEditText("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">📒 Settings – Manage Notes</h1>

      {notes.length === 0 && (
        <p className="text-gray-500 italic">No notes found. Start writing to see them here.</p>
      )}

      <div className="space-y-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white shadow-sm border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-all"
          >
            {editNoteId === note.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  autoFocus
                />
                <div className="flex gap-2 ml-3">
                  <button
                    onClick={() => saveNote(note.id)}
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg"
                    title="Save"
                  >
                    <CheckIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-lg"
                    title="Cancel"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="text-gray-700 flex-1">{note.text}</span>
                <div className="flex gap-2 ml-3">
                  <button
                    onClick={() => startEdit(note)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
                    title="Edit"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                    title="Delete"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
