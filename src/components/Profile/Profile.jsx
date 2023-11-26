import css from './Profile.module.css';
import { ProfileListItem } from './Profile_list_item/Profile_list_item';

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
    const statsArr = Array.from(stats)
    return <div className='user-profile-container'>
       <img className={css.avatar} src={avatar} alt={username} width={30} height={30}/>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
        <ul className={css.stats_list}>
            {statsArr.map(stat => {
                console.log(stat);
                return <ProfileListItem stat={stat} />
            })}
            
        </ul>        
    </div>

}
