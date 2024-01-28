export function Friend({ name, url, selected, setActiveUser, status }) {
  return (
    <div
      className="user"
      style={{ backgroundColor: selected ? "#ffe8cc" : "#fff" }}
    >
      <img src={url} alt="avatar" className="user-photo" />
      <div>
        <h3>{name}</h3>
        <span>{status}</span>
      </div>
      <button className="select-button" onClick={setActiveUser}>
        {selected ? "Close" : "Select"}
      </button>
    </div>
  );
}
