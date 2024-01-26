import { useState } from "react";
import { Bills } from "./Bills";
import { AddFriend } from "./AddFriend";
import { FriendList } from "./FriendList";

export function App() {
  const [users, setUsers] = useState([]);

  function addNewUser(newUser) {
    setUsers((users) => [...users, newUser]);
  }

  return (
    <div className="container">
      <div>
        <FriendList users={users} addNewUser={addNewUser} />
        <AddFriend addNewUser={addNewUser} />
      </div>
      <Bills />
    </div>
  );
}

export default App;
