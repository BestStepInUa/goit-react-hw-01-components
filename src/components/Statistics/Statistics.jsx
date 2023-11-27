import PropTypes from 'prop-types';

import { getRandomHexColor } from 'helpers/getRandomHexColor';

import css from './Statistics.module.css'

export const Statistics = ({ title, data }) => {
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>Upload stats</h2>} 

        <ul className={css.stat_list}>
            {data.map(({ id, label, percentage }) => 
                <li key={id} className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li> 
            )}
       </ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }))
}