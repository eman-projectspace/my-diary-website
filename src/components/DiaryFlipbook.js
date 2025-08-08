import React from "react";
import HTMLFlipBook from "react-pageflip";

const DiaryFlipbook = ({ entries }) => {
  return (
    <div className="flex justify-center p-6">
      <HTMLFlipBook width={400} height={500} className="shadow-xl">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="bg-[#fff8e7] p-6 border-4 border-[#d2b48c] font-serif"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
            }}
          >
            <h2 className="text-xl font-[Pacifico] text-[#5d4037] mb-4">
              {entry.date}
            </h2>
            <p className="text-[#5d4037] leading-relaxed">{entry.text}</p>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default DiaryFlipbook;
