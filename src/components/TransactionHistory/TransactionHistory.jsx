import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transaction }) => {
    return <table className={css.transaction_history}>
  <thead className={css.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
            {transaction.map(({ id, type, amount, currency }) =>
            <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
            </tr>        
            )}   
    </tbody>
</table>
}

TransactionHistory.propTypes = {
    transaction: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    }))
}