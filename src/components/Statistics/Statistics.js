import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title_container}>{title}</h2>}

      <ul className={s.stat_list}>
        {stats.map(el => (
          <li
            className={s.item}
            key={el.id}
            style={{
              backgroundColor:
                '#' +
                (Math.random().toString(16) + '000000')
                  .substring(2, 8)
                  .toUpperCase(),
            }}
          >
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
