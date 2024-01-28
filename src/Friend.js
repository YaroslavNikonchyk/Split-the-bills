export function Friend({ name, url, selected, setActiveUser, status }) {
  return (
    <div
      className="user"
      style={{ backgroundColor: selected ? "#ffe8cc" : "#fff" }}
    >
      <img
        src={
          url ||
          "https://sportishka.com/uploads/posts/2021-11/1638261879_32-sportishka-com-p-nakachennii-negr-krasivie-foto-silovie-vid-34.jpg"
        }
        alt="avatar"
        className="user-photo"
      />
      <div>
        <h3>{name}</h3>
        <span
          style={{
            color: !status[name]
              ? "black"
              : status[name].includes("You owe")
              ? "red"
              : "green",
          }}
        >
          {status[name] || `You and ${name} even`}
        </span>
      </div>
      <button className="select-button" onClick={setActiveUser}>
        {selected ? "Close" : "Select"}
      </button>
    </div>
  );
}
