import PropTypes from "prop-types";
import { Container, Image, Text, List, Item, Label } from "./Profile.styled";

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Container>
      <div className="description">
        <Image src={avatar} alt={username} />
        <Text>{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </div>

      <List>
        <Item>
          <Label>Followers:</Label>
          <span className="quantity"> {stats.followers}</span>
        </Item>
        <Item>
          <Label>Views:</Label>
          <span className="quantity"> {stats.views}</span>
        </Item>
        <Item>
          <Label>Likes:</Label>
          <span className="quantity"> {stats.likes}</span>
        </Item>
      </List>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
