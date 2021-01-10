import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

export default function FriendList(props) {
  const { friends } = props;
  return (
    <ul className={s.friendList}>
      {friends.map(el => (
        <FriendListItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
          key={el.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
