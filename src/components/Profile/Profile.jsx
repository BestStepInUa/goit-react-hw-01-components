import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";

import css from './Profile.module.css';

import { ProfileListItem } from './ProfileListItem/ProfileListItem';

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
    const statsArr = Object.entries(stats)
    return <div className={css.user_profile_container}>
       <img className={css.avatar} src={avatar} alt={username} width={30} height={30}/>
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <div className={css.location_wrapper}>
            <IoLocationOutline />
            <p className={css.location}>{location}</p>
        </div>        
        <ul className={css.stats_list}>
            {statsArr.map(stat => <ProfileListItem key={stat[0]} stat={stat} />)}
        </ul>        
    </div>

}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,
        stats: PropTypes.object,
    })
}