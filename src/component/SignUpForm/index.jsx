import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './SignUpForm.module.scss';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: '',
      emailValue: '',
      passwordValue: '',
      isNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
    };
  }

  submitHandler = e => {
    e.preventDefault();
  };

  handleNameChange = ({ target: { value } }) => {
    this.setState({
      nameValue: value,
      isNameValid: /^\S+/.test(value),
    });
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      emailValue: value,
      isEmailValid: /\S+@\S+\.\S+/.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      passwordValue: value,
      isPasswordValid: /^\S+/.test(value),
    });
  };

  render() {
    const {
      nameValue,
      emailValue,
      passwordValue,
      isNameValid,
      isPasswordValid,
      isEmailValid,
    } = this.state;

    const nameClassName = classNames(styles.input, {
      [isNameValid ? styles.valid : styles.invalid]: nameValue,
    });

    const passwordClassName = classNames(styles.input, {
      [isPasswordValid ? styles.valid : styles.invalid]: passwordValue,
    });

    const emailClassName = classNames(styles.input, {
      [isEmailValid ? styles.valid : styles.invalid]: emailValue,
    });

    return (
      <form className={styles.container} onSubmit={this.submitHandler}>
        <label className={styles.label}>
          Name
          <input
            type='text'
            className={nameClassName}
            name='nameValue'
            placeholder='Your name'
            value={nameValue}
            onChange={this.handleNameChange}
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            type='text'
            className={emailClassName}
            name='emailValue'
            placeholder='Your email'
            value={emailValue}
            onChange={this.handleEmailChange}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            type='password'
            className={passwordClassName}
            name='passwordValue'
            placeholder='Enter your password'
            value={passwordValue}
            onChange={this.handlePasswordChange}
          />
        </label>
        <button
          type='submit'
          className={styles.button}
          id='button'
          disabled={!(isNameValid && isPasswordValid && isEmailValid)}
        >
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUpForm;
