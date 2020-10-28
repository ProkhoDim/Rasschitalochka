import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authOperations } from '../../redux/auth';
import routes from '../../routes';

import phone from '../../assets/background/phone-mock-up.png';
import s from './Login.module.css';
import { Media } from '../../common';

const initialState = {
  email: '',
  password: '',
};

class Login extends Component {
  state = initialState;

  onChangeHandler = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmitHandler = e => {
    const { onLogin } = this.props;
    e.preventDefault();
    onLogin(this.state);
    this.setState(initialState);
  };

  render() {
    const { email, password } = this.state;
    const isBtnNotDisabled = email.length > 0 && password.length > 0;
    return (
      <div className={s.main__container}>
        <Media device="desktop">
          <div className={s.desktopImage__container}>
            <img
              src={phone}
              alt="mobile phone"
              className={s.desktopImage__phone}
            />
          </div>
        </Media>
        <div className={s.loginBlock__container}>
          <div className={s.loginBlock}>
            <div className={s.logo}></div>
            <span className={s.projectName}>Raschitalochka</span>
            <form
              className={s.loginForm}
              onSubmit={this.onSubmitHandler}
              autoComplete="off"
            >
              <label>
                <input
                  className={s.emailInput}
                  type="email"
                  name="email"
                  placeholder="E-mail as Login"
                  autoComplete="off"
                  value={email}
                  onChange={this.onChangeHandler}
                />
              </label>

              <label>
                <input
                  className={s.passwordInput}
                  type="password"
                  name="password"
                  value={password}
                  autoComplete="off"
                  placeholder="Password"
                  onChange={this.onChangeHandler}
                />
              </label>
              <button
                className={s.btnLogin}
                type="submit"
                disabled={!isBtnNotDisabled}
              >
                Enter
              </button>
            </form>
            <NavLink className={s.regLink} exact to={routes.REGISTER}>
              Register
            </NavLink>
          </div>
        </div>

        <p className={s.appDescription}>
          <span>Manage your budget</span> <span>with finance app</span>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(authOperations.login(data)),
});

export default connect(null, mapDispatchToProps)(Login);
