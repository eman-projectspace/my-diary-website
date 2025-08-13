import { useState, useEffect } from "react";

export default function Settings({ notes, setNotes }) {
  const [editNoteId, setEditNoteId] = useState(null);
  const [editText, setEditText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("1234");

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Load saved credentials
  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");
    if (savedUser) setUsername(savedUser);
    if (savedPass) setPassword(savedPass);
  }, []);

  const login = () => {
    const u = prompt("Enter username:");
    const p = prompt("Enter password:");
    if (u === username && p === password) {
      setIsLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Invalid credentials!");
    }
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const startEdit = (note) => {
    setEditNoteId(note.id);
    setEditText(note.text);
  };

  const saveEdit = () => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === editNoteId ? { ...note, text: editText } : note
      )
    );
    setEditNoteId(null);
  };

  const changeCredentials = () => {
    if (newUsername.trim()) {
      setUsername(newUsername);
      localStorage.setItem("username", newUsername);
    }
    if (newPassword.trim()) {
      setPassword(newPassword);
      localStorage.setItem("password", newPassword);
    }
    setNewUsername("");
    setNewPassword("");
    alert("Credentials updated!");
  };

  return (
    <div>
      <h2>Settings</h2>
      {!isLoggedIn ? (
        <button onClick={login}>Login as Admin</button>
      ) : (
        <>
          {notes.map((note) => (
            <div key={note.id}>
              {editNoteId === note.id ? (
                <>
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={saveEdit}>Save</button>
                </>
              ) : (
                <>
                  <p>{note.text}</p>
                  <button onClick={() => startEdit(note)}>Edit</button>
                  <button onClick={() => deleteNote(note.id)}>Delete</button>
                </>
              )}
            </div>
          ))}

          <hr />
          <h3>Change Username/Password</h3>
          <input
            placeholder="New Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <input
            placeholder="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={changeCredentials}>Update Credentials</button>
        </>
      )}
    </div>
  );
}
