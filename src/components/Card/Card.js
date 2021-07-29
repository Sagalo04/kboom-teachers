import React from 'react';
import Button from './Button';
import styles from './card.module.css';
import Progressbar from './Progressbar';

export default function Card({ nombre, etapa }) {
  return (
    <div className={styles.o_card_container}>
      <h1>{nombre}</h1>
      <p> Progreso</p>
      <Progressbar etapa={etapa} />
      <Button />
    </div>
  );
}
