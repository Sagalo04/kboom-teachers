import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';

import styles from './home.module.css';
import Card from '../Card/Card';

const HomePage = () => (
  <div className={styles.o_home}>
    <div className={styles.o_card_container}>
      <Card nombre={'Santiago García López'} etapa={5} />
      <Card nombre={'Laura Garces'} etapa={2} />
      <Card nombre={'Santiago García López'} etapa={3} />
      <Card nombre={'Laura Garces'} etapa={2} />
      <Card nombre={'Santiago García López'} etapa={4} />
      <Card nombre={'Laura Garces'} etapa={2} />
    </div>
  </div>
);

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
