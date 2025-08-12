import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[#fdf6e3] flex items-center justify-center p-4 sm:p-6"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
      }}
    >
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 text-center w-full max-w-md sm:max-w-lg border-4 border-[#d2b48c]">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-[Pacifico] text-[#5d4037] mb-4 break-words">
          Welcome to <span className="text-[#b08d57]">ByJunaid</span>
        </h1>

        {/* Quote */}
        <p className="italic text-[#6d4c41] mb-6 text-sm sm:text-base">
          “Each day is a page in your story.”
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/entries")}
          className="bg-[#d2b48c] hover:bg-[#b08d57] text-white px-5 sm:px-6 py-3 rounded-lg shadow-md transition duration-300 text-sm sm:text-base w-full sm:w-auto"
        >
          📖 Open Diary
        </button>
      </div>
    </div>
  );
};

export default Home;
