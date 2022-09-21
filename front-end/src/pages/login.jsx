import React, { useState, useEffect } from 'react';

function Login() {
  // const [login, setLogin] = useState(false);

  const [email, setEmail] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [password, setPassword] = useState('');

  const verifyForm = () => {
    const emailFormat = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
    const minSize = 6;
    const isEmailValid = emailFormat.test(email);
    const isPasswordValid = password.length >= minSize;
    console.log(email);
    console.log(password.length);
    setButtonDisabled(!(isEmailValid && isPasswordValid));
  };

  useEffect(() => {
    verifyForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const handleInputChange = async (target) => {
    if (target.name === 'email') setEmail(target.value);
    if (target.name === 'password') setPassword(target.value);
  };

  // useEffect(() => {

  // }, )

  return (
    <div className="Login">
      <form className="login-form">
        <h1>Login</h1>
        <label htmlFor="email">
          <span>Login</span>
          <input
            type="text"
            id="email"
            data-testid="common_login__input-email"
            name="email"
            onChange={ ({ target }) => handleInputChange(target) }
            placeholder="E-mail"
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            id="password"
            type="password"
            onChange={ ({ target }) => handleInputChange(target) }
            data-testid="common_login__input-password"
            name="password"
            placeholder="Senha"
          />
        </label>
        <button
          disabled={ isButtonDisabled }
          // onClick={ handleClick }
          type="submit"
          className="login-btn"
          data-testid="common_login__button-login"
        >
          Login
        </button>
        <button
          className="registre-se"
          data-testid="common_login__button-register"
          type="submit"
        >
          Cadastra-se
        </button>
      </form>
    </div>
  );
}

export default Login;
