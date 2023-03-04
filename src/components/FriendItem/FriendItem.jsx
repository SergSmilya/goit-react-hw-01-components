import PropTypes from "prop-types";
import { Item, Status } from "./FriendItem.styled";

export function FriendItem({ isOnline, avatar, name }) {
  return (
    <Item>
      <Status bool={isOnline}></Status>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </Item>
  );
}

FriendItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
