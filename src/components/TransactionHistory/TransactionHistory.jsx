import PropTypes from 'prop-types';
import Transaction from './Transaction';
import s from './TransactionHistory.module.css';

export default function TransactionHistory(props) {
  const { items } = props;
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => (
          <Transaction
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
