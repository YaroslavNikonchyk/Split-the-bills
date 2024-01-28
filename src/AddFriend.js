import { useState } from "react";

export function AddFriend({ addNewUser, name, setName }) {
  const [url, setURL] = useState("");
  const [open, setOpen] = useState("False");

  async function fetchImage() {
    try {
      const response = await fetch(
        "https://sportishka.com/uploads/posts/2021-11/1638261879_32-sportishka-com-p-nakachennii-negr-krasivie-foto-silovie-vid-34.jpg"
      );
      setURL(response.url);
    } catch (error) {
      console.error(error);
    }
  }

  fetchImage();

  function submitAdding() {
    const newUser = { name, url };
    addNewUser(newUser);
    setName("");
    setURL("");
  }

  return (
    <>
      {open && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitAdding();
          }}
        >
          <div className="add-friend">
            <div className="label-space">
              <label>🐵 Friend name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="add-friend-input"
                required
              />
            </div>
            <div className="label-space">
              <label>🐷 Image URL</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setURL(e.target.value)}
                className="add-friend-input"
              />
            </div>
            <button className="add">Add</button>
          </div>
        </form>
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
