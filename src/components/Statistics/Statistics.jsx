import PropTypes from 'prop-types';

import css from './Statistics.module.css'

export const Statistics = ({ title, data }) => {
    console.log(data);
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>Upload stats</h2>} 

        <ul className={css.stat_list}>
            {data.map(({ id, lable, percentage }) => {
                return <li key={id} className={css.item}>
                    <span className={css.label}>{lable}</span>
                    <span className={css.percentage}>{percentage}</span>
                </li>
            }
                
        )}
       </ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })
}