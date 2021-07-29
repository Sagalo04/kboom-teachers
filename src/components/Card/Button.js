import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import styles from './card.module.css';

class Button extends Component {
  render() {
    return (
      <Link className={styles.o_button} to={ROUTES.LANDING}>
        Ver estadísticas
        {/* <div className={styles.o_button}>Ver Estadisticas</div> */}
      </Link>
    );
  }
}

export default Button;
