import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import DiaryEntries from "./pages/DiaryEntries";
import NewEntry from "./pages/NewEntry";
import Header from "./components/Header";
import Setting from "./components/Setting";

function App() {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("diaryEntries");
    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (newEntry) => {
    setEntries((prevEntries) => [newEntry, ...prevEntries]);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entries" element={<DiaryEntries entries={entries} />} />
          <Route path="/new" element={<NewEntry addEntry={addEntry} />} />
          {/* Pass entries and updater to Settings */}
          <Route path="/setting" element={<Setting notes={entries} setNotes={setEntries} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function Layout({ children }) {
  const location = useLocation();
  const hideHeaderOn = ["/"];

  return (
    <>
      {!hideHeaderOn.includes(location.pathname) && <Header />}
      {children}
    </>
  );
}

export default App;
