import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) =>
    <li className={css.item}>
        {isOnline ? <span className={`${css.status} ${css.online}`}></span> : <span className={`${css.status} ${css.ofline}`}></span>}
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
    </li>   

FriendListItem.protTypes = {    
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}   