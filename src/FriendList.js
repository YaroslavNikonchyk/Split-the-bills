import { Friend } from "./Friend";

export function FriendList({
  users,
  selected,
  setActiveFriend,
  status,
  deleteUser,
}) {
  return (
    <div className="friendList">
      {users.map((user) => (
        <Friend
          url={user.url}
          name={user.name}
          user={user}
          deleteUser={deleteUser}
          status={status}
          selected={selected === user.name}
          setActiveUser={() => setActiveFriend(user.name)}
        />
      ))}
    </div>
  );
}
