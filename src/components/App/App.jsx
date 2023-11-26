import PropTypes from 'prop-types';

import user from 'data/user.json';

import css from './App.module.css'

import { Profile } from "../Profile/Profile";

export const App = () => {
  return (
    <>
      <div className={css.task_wrapper}>
      <h1 className={css.task_title}>Task 1</h1>
        <Profile user={user} />
      </div>

      <div className={css.task_wrapper}>
      <h1 className={css.task_title}>Task 2</h1>
        {/* <Profile user={user} /> */}
      </div>
    </>
    
  );
};

App.propTypes = {
  user: PropTypes.object,
}
