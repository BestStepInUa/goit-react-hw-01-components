import PropTypes from 'prop-types';

import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return <ul className={css.friend_list}>
        {friends.map(({ id, avatar, name, isOnline }) => 
            <li key={id} className={css.item}>
                {isOnline ? <span className={`${css.status} ${css.online}`}></span> : <span className={`${css.status} ${css.ofline}`}></span>}
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p className={css.name}>{name}</p>
            </li>
        )}  
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
    }))
}