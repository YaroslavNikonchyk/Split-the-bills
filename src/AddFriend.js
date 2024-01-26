import { useState } from "react";

export function AddFriend({ addNewUser }) {
  const [name, setName] = useState("");
  const [URL, setURL] = useState("");
  const [open, setOpen] = useState("False");

  function submitAdding() {
    const newUser = { name, URL };
    addNewUser(newUser);
    setName("");
    setURL("");
  }

  return (
    <>
      {open && (
        <div className="add-friend">
          <div className="label-space">
            <label>🐵 Friend name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="add-friend-input"
            />
          </div>
          <div className="label-space">
            <label>🐷 Image URL</label>
            <input
              type="text"
              value={URL}
              onChange={(e) => setURL(e.target.value)}
              className="add-friend-input"
            />
          </div>

          <button className="add" onClick={submitAdding}>
            Add
          </button>
        </div>
      )}
      <button
        className="close"
        value={open}
        onClick={() => setOpen(() => !open)}
      >
        {open ? "Close" : "Add friend"}
      </button>
    </>
  );
}
