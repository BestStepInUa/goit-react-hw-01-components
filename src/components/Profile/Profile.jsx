import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    <div className='user-profile-container'>
        <img className={css.avatar} src={avatar} alt={username} />
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
        <ul className={css.stats_list}>          
                  
        </ul>
        <h1>Hello</h1>
    </div>

}