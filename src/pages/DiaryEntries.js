import React from "react";
import DiaryFlipbook from "../components/DiaryFlipbook";

const DiaryEntries = ({ entries }) => {

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


    </div>
  );
};

export default DiaryEntries;
