import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

const DiaryFlipbook = ({ entries }) => {
  const [bookSize, setBookSize] = useState({ width: 400, height: 500 });

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 480) {
        setBookSize({
          width: Math.min(screenWidth * 0.75, 300),
          height: 400,
        });
      } else if (screenWidth < 768) {
        setBookSize({ width: 350, height: 450 });
      } else {
        setBookSize({ width: 400, height: 500 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="flex justify-center p-4 sm:p-6">
      <HTMLFlipBook
        width={bookSize.width}
        height={bookSize.height}
        className="shadow-xl"
      >
        {entries.map((entry, index) => (
          <div
            key={index}
            className="bg-[#fff8e7] p-4 sm:p-6 border-2 border-[#d2b48c] font-serif"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
            }}
          >
            <h2 className="text-lg sm:text-xl font-[Pacifico] text-[#5d4037] mb-4 break-words">
              {entry.date}
            </h2>
            <p className="text-[#5d4037] leading-relaxed text-sm sm:text-base break-words">
              {entry.text}
            </p>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default DiaryFlipbook;
