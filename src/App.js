import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DiaryEntries from "./pages/DiaryEntries";
import NewEntry from "./pages/NewEntry";

function App() {
  const [entries, setEntries] = useState([]);


  useEffect(() => {
    const savedEntries = localStorage.getItem("diaryEntries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entries" element={<DiaryEntries entries={entries} />} />
        <Route path="/new" element={<NewEntry addEntry={addEntry} />} />
      </Routes>
    </Router>
  );
}

export default App;
