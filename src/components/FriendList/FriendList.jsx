import PropTypes from 'prop-types';

import css from './FriendList.module.css';

import { FriendListItem } from './FriendListItem/FriendListItem'

export const FriendList = ({ friends }) => {
    return <ul className={css.friend_list}>
        {friends.map(friend => <FriendListItem friend={friend} key={[friend.id]} />
        )}  
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            friend: PropTypes.object,
        }))
}    