import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fdf6e3] flex items-center justify-center p-6"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')" }}>

      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg border-4 border-[#d2b48c]">

        <h1 className="text-4xl font-[Pacifico] text-[#5d4037] mb-4">
          Welcome to My Diary
        </h1>

        <p className="italic text-[#6d4c41] mb-6">
          “Each day is a page in your story.”
        </p>

        <button
          onClick={() => navigate("/entries")}
          className="bg-[#d2b48c] hover:bg-[#b08d57] text-white px-6 py-3 rounded-lg shadow-md transition duration-300">
          📖 Open Diary
        </button>
      </div>
    </div>
  );
};

export default Home;
