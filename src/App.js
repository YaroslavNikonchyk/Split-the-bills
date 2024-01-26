import img from "./components/OIP.jpg";

function App() {
  return (
    <div className="container">
      <FriendList users={users} />
      <Bills />
    </div>
  );
}

const users = [
  {
    img: img,
    name: "Clara",
    billStatus: "passed",
  },
];

function FriendList({ users }) {
  return (
    <div className="friendList">
      {users.map((user) => (
        <Friend img={user.img} name={user.name} billStatus={user.billStatus} />
      ))}
    </div>
  );
}

function Friend({ img, name, billStatus }) {
  return (
    <div className="user">
      <img src={img} alt={name} className="user-photo" />
      <div>
        <h3>{name}</h3>
        <span>{billStatus}</span>
      </div>
      <button className="select-button">Select</button>
    </div>
  );
}

function Bills() {
  return (
    <div className="bills-container">
      <h2>Split a bill with X</h2>
      <div className="label-space">
        <label>🤑 Bill value</label>
        <input type="text"></input>
      </div>
      <div className="label-space">
        <label>😫 Your expense</label>
        <input type="text"></input>
      </div>
      <div className="label-space">
        <label>😋 X expense</label>
        <input type="text" readOnly className="readonly"></input>
      </div>
      <div className="label-space">
        <label>😱 Who is paing the bill</label>
        <select>
          <option>You</option>
          <option>X</option>
        </select>
      </div>
      <button className="split"> Split bills</button>
    </div>
  );
}
export default App;
