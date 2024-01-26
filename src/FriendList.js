import { Friend } from "./Friend";

export function FriendList({ users }) {
  return (
    <div className="friendList">
      {users.map((user) => (
        <Friend img={user.URL} name={user.name} billStatus="x" />
      ))}
    </div>
  );
}
