export function Friend({
  name,
  url,
  selected,
  setActiveUser,
  status,
  deleteUser,
  user,
}) {
  return (
    <div
      className="user"
      style={{ backgroundColor: selected ? "#ffe8cc" : "#fff" }}
    >
      <span className="delete-button" onClick={() => deleteUser(user)}>
        ❌
      </span>
      <img
        src={
          url ||
          "https://www.marketingmuses.com/wp-content/uploads/2018/01/invis-user.png"
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
