import "./FriendListItem.css";
export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      {isOnline ? (
        <span id="online">Online</span>
      ) : (
        <span id="offline">Offline</span>
      )}
    </div>
  );
}
