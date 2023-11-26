import PropTypes from 'prop-types';

import css from './Profile_list_item.module.css';

export const ProfileListItem = ({ stat }) => {
    return <li className={css.stats_item}>
        <p className={css.stats_title}>{stat[0]}</p>
        <p className={css.stats_value}>{stat[1]}</p>
    </li>
};    

ProfileListItem.propTypes = {
    stat: PropTypes.array,
};