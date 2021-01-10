import PropTypes from 'prop-types';
import s from './Statictics.module.css';

export default function Statistics(props) {
  const { title, stats } = props;
  return title ? (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(el => {
          return (
            <li
              className={s.item}
              key={el.id}
              style={{ backgroundColor: colorGenerate() }}
            >
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  ) : null;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function colorGenerate() {
  let result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(Math.floor(Math.random() * 255));
  }
  const alpha = Math.random(0.1);
  return `rgba(${result}, ${alpha})`;
}
