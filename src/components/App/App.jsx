import PropTypes from 'prop-types';

import user from 'data/user.json';
import data from 'data/data.json'

import css from './App.module.css'

import { Profile } from "../Profile/Profile";
import { Statistics } from 'components/Statistics/Statistics';

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
    </>
    
  );
};

App.propTypes = {
  user: PropTypes.object,
  title: PropTypes.string,
  data: PropTypes.array,
}
