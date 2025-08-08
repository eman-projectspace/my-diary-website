import React from "react";
import DiaryFlipbook from "../components/DiaryFlipbook";
import { useNavigate } from "react-router-dom";

const DiaryEntries = ({ entries }) => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[#fff8e7]"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
      }}
    >
      <h1 className="text-3xl font-[Pacifico] text-center text-[#5d4037] pt-8">
        My Diary
      </h1>

      <DiaryFlipbook entries={entries} />

      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/new")}
          className="bg-[#d2b48c] hover:bg-[#b08d57] text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          ✍ Write New Entry
        </button>
      </div>
    </div>
  );
};

export default DiaryEntries;
