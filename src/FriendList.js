import { Friend } from "./Friend";

export function FriendList({ users, selected, setActiveFriend, status }) {
  return (
    <div className="friendList">
      {users.map((user) => (
        <Friend
          url={user.url}
          name={user.name}
          status={status}
          selected={selected === user.name}
          setActiveUser={() => setActiveFriend(user.name)}
        />
      ))}
    </div>
  );
}
