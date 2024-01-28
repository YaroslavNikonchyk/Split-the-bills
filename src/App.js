import { useState } from "react";
import { Bills } from "./Bills";
import { AddFriend } from "./AddFriend";
import { FriendList } from "./FriendList";

export function App() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [name, setName] = useState("");
  const [bill, setBill] = useState("");
  const [status, setStatus] = useState("");

  function handleBill(e) {
    setBill(e.target.value);
  }

  function setActiveFriend(name) {
    setSelected((currentSelected) => (currentSelected === name ? null : name));
  }

  function addNewUser(newUser) {
    setUsers((users) => [...users, newUser]);
  }

  function getActiveUserName() {
    return selected;
  }

  return (
    <div className="container">
      <div>
        <FriendList
          users={users}
          addNewUser={addNewUser}
          selected={selected}
          setActiveFriend={setActiveFriend}
          bill={bill}
          status={status}
          setStatus={setStatus}
        />
        <AddFriend addNewUser={addNewUser} name={name} setName={setName} />
      </div>
      <Bills
        users={users}
        name={name}
        selected={selected}
        getActiveUserName={getActiveUserName()}
        bill={bill}
        setBill={setBill}
        handleBill={handleBill}
        setStatus={setStatus}
      />
    </div>
  );
}

export default App;
