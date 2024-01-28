import { Friend } from "./Friend";

export function FriendList({ users, selected, setActiveFriend }) {
  return (
    <div className="friendList">
      {users.map((user) => (
        <Friend
          url={user.url}
          name={user.name}
          selected={selected === user.name}
          setActiveUser={() => setActiveFriend(user.name)}
        />
      ))}
    </div>
  );
}
