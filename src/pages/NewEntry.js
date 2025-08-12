import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewEntry = ({ addEntry }) => {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && text) {
      addEntry({
        id: Date.now(), // unique id
        date,
        text,
      });
      navigate("/entries");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff8e7] p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg border-4 border-[#d2b48c]"
      >
        <h1 className="text-2xl font-[Pacifico] text-[#5d4037] mb-6 text-center">
          ✨ Pen Down Your Thoughts
        </h1>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 mb-4 border border-[#d2b48c] rounded-lg"
        />

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your thoughts here..."
          rows="8"
          className="w-full p-4 border border-[#d2b48c] rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="mt-4 w-full bg-[#d2b48c] hover:bg-[#b08d57] text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Save Entry
        </button>
      </form>
    </div>
  );
};

export default NewEntry;
