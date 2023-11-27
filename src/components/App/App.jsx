import PropTypes from 'prop-types';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transaction from 'data/transactions.json';

import css from './App.module.css';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <div className={css.task_wrapper}>
      <h1 className={css.task_title}>Task 1</h1>
        <Profile user={user} />
      </div>

      <div className={css.task_wrapper}>
      <h1 className={css.task_title}>Task 2</h1>
        <Statistics title="Upload stats" data={data} />
      </div>

      <div className={css.task_wrapper}>
      <h1 className={css.task_title}>Task 3</h1>
        <FriendList friends={friends} />
      </div>

      <div className={css.task_wrapper}>
      <h1 className={css.task_title}>Task 4</h1>
        <TransactionHistory transaction={transaction} />
      </div>
    </>
    
  );
};

App.propTypes = {
  user: PropTypes.object,
  title: PropTypes.string,
  data: PropTypes.array,
  friends: PropTypes.array,
  transaction: PropTypes.array,
}
