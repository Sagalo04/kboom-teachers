import React from 'react';
import styles from './signout.module.css';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button
    className={styles.o_signout}
    type="button"
    onClick={firebase.doSignOut}
  >
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
