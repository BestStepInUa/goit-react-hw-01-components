import css from './Profile_list_item.module.css';

export const ProfileListItem = ({ stat }) => {
    console.log(stat);
    return <li key={stat} className={css.stats_list_item}>
        <p className={css.stats_list_item_title}>{stat}</p>
        <p className={css.stats_list_item_value}>{stat.value}</p>
    </li>
};    
