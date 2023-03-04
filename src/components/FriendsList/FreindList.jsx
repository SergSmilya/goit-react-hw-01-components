import PropTypes from "prop-types";
import { FriendItem } from "../FriendItem/FriendItem";
import { List } from "./FriendList.styled";

export function FriendList({ items }) {
  return (
    <List>
      {items.map(({ id, isOnline, name, avatar }) => (
        <FriendItem key={id} isOnline={isOnline} name={name} avatar={avatar} />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
