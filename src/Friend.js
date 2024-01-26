export function Friend({ name, URL }) {
  return (
    <div className="user">
      <img src={URL} alt={name} className="user-photo" />
      <div>
        <h3>{name}</h3>
        <span>X</span>
      </div>
      <button className="select-button">Select</button>
    </div>
  );
}
