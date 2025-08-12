import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
export default function DiaryHeader() {
  const [open, setOpen] = useState(false);
  const [today, setToday] = useState('');

  useEffect(() => {
    const d = new Date();
    const opts = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    setToday(d.toLocaleDateString(undefined, opts));
  }, []);


  const navigate = useNavigate();

  return (
    <header className="w-full bg-gradient-to-r from-rose-50 via-amber-50 to-indigo-50 shadow-md sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left: Logo + Title */}
          <div className="flex items-center gap-3">
            <button
              aria-label="logo"
              className="flex items-center gap-2 focus:outline-none"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow">
                {/* simple quill icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 21l1-4 4-1 11-11a3 3 0 0 0-4-4L2 16v5z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-800">ByJunaid</h1>
                <p className="text-xs text-gray-500">{today}</p>
              </div>
            </button>
          </div>

          {/* Center: Search (hidden on very small screens) */}
          <div className="flex-1 px-4 hidden sm:flex items-center justify-center">
            <div className="w-full max-w-md">
              <label htmlFor="search" className="sr-only">Search entries</label>
              <div className="relative">
                <input
                  id="search"
                  type="search"
                  placeholder="Search entries, tags or feelings..."
                  className="w-full rounded-xl border border-transparent py-2 pl-10 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-200 bg-white/70"
                />
                <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 bg-rose-500 text-white rounded-lg shadow-md hover:scale-[1.01] transition-transform" onClick={() => navigate("/new")}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              New Entry
            </button>

            <div className="hidden sm:flex items-center gap-3">
              <button className="p-2 rounded-full bg-white/80 shadow text-gray-700 hover:scale-105 transition-transform" title="Mood">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8.5 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM18 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 16c1.333-1 3.333-1 4 0" />
                </svg>
              </button>

              <button className="p-1 rounded-full" aria-label="notifications">
                <span className="relative inline-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h11z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold leading-none text-white bg-rose-500 rounded-full">3</span>
                </span>
              </button>

              <button
                className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white transition-colors duration-200"
                title="Profile"
              >
                <Cog6ToothIcon className="w-5 h-5 text-gray-600" />
                <span className="text-sm hidden md:inline text-gray-700">Settings</span>
              </button>

            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label="Open navigation"
                className="p-2 rounded-md bg-white/90 shadow"
              >
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`${open ? 'max-h-96 py-4' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
          <div className="flex flex-col gap-3 pb-4">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/60" onClick={() => navigate("/new")} >New Entry</button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/60">Search</button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/60">Settings</button>
          </div>
        </div>
      </div>
    </header>
  );
}
