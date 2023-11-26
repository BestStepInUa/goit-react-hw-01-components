import css from './Profile_list_item.module.css';

export const ProfileListItem = ({ stat }) => {
    console.log(stat);
    return <li className={css.stats_list_item}>
        <p className={css.stats_list_item_title}>{stat[0]}</p>
        <p className={css.stats_list_item_value}>{stat[1]}</p>
    </li>
};    
