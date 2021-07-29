import React from 'react';
import styles from './card.module.css';

export default function Progressbar({ etapa }) {
  return (
    <div className={styles.o_steps}>
      <div
        className={
          etapa >= 1
            ? styles.o_step + ' ' + styles.o_step_active
            : styles.o_step
        }
      >
        1
      </div>
      <div
        className={
          etapa >= 2
            ? styles.o_step_c + ' ' + styles.o_step_active
            : styles.o_step_c
        }
      ></div>

      <div
        className={
          etapa >= 2
            ? styles.o_step + ' ' + styles.o_step_active
            : styles.o_step
        }
      >
        2
      </div>
      <div
        className={
          etapa >= 3
            ? styles.o_step_c + ' ' + styles.o_step_active
            : styles.o_step_c
        }
      ></div>

      <div
        className={
          etapa >= 3
            ? styles.o_step + ' ' + styles.o_step_active
            : styles.o_step
        }
      >
        3
      </div>
      <div
        className={
          etapa >= 4
            ? styles.o_step_c + ' ' + styles.o_step_active
            : styles.o_step_c
        }
      ></div>

      <div
        className={
          etapa >= 4
            ? styles.o_step + ' ' + styles.o_step_active
            : styles.o_step
        }
      >
        4
      </div>
      <div
        className={
          etapa >= 5
            ? styles.o_step_c + ' ' + styles.o_step_active
            : styles.o_step_c
        }
      ></div>

      <div
        className={
          etapa >= 5
            ? styles.o_step + ' ' + styles.o_step_active
            : styles.o_step
        }
      >
        <img src="../../crown.svg" alt="" />
      </div>
    </div>
  );
}
