import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import styles from './signin.module.css'
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div className={styles.o_signin_container}>
    <div className={styles.o_signin_image}>

    </div>
    <div className={styles.o_signin_main}> 
      <img src='../../Logo.svg' alt="" />
      <h1>PORTAL DOCENTES</h1>
      <p>Inicia Sesión con tu cuenta UAO</p>
      <SignInGoogle />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  </div>
);

/*const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};*/

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;


class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button className={styles.o_btn} type="submit">Iniciar Sesión</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}





const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);


export default SignInPage;

export { SignInGoogle };
