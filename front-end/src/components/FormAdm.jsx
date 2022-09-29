import React, { useContext, useEffect, useState } from 'react';
import fetchCreateUserAdm from '../api/fetchCreateUserAdm';
import stateGlobalContext from '../context/stateGlobalContext';
import { readLocal } from '../helpers/localStorage';

function Form() {
  const {
    setLoading,
    existingUser,
    setExistingUser,
    messageError,
    setMessageError,
  } = useContext(stateGlobalContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isButtonDisabled, setisButtonDisabled] = useState(true);

  const handleChange = async (target) => {
    if (target.name === 'name') setName(target.value);
    if (target.name === 'email') setEmail(target.value);
    if (target.name === 'password') setPassword(target.value);
    if (target.name === 'type') setRole(target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const token = readLocal('user');
    setLoading(true);
    const result = await fetchCreateUserAdm(token.token, { name, email, password, role });
    const STATUS_NUMBER = 409;
    setLoading(false);
    if (result.status === STATUS_NUMBER) {
      setExistingUser(true);
      console.log(result.data.message);
      setMessageError(result.data.message);
      return;
    }
    setExistingUser(false);
  };
  const verifyForm = () => {
    const emailFormat = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
    const minSize = 6;
    const minName = 12;
    const isEmailValid = emailFormat.test(email);
    const isPasswordValid = password.length >= minSize;
    const isNameValid = name.length >= minName;
    const isRoleValid = role !== '';
    setisButtonDisabled(!(isEmailValid && isPasswordValid && isNameValid && isRoleValid));
  };

  useEffect(() => {
    verifyForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, name, role]);

  return (
    <div>
      <form>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            // value={ name }
            data-testid="admin_manage__input-name"
            onChange={ ({ target }) => handleChange(target) }
          />
        </label>
        <label
          htmlFor="email"
        >
          <input
            type="email"
            name="email"
            // value={ email }
            data-testid="admin_manage__input-email"
            onChange={ ({ target }) => handleChange(target) }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            // value={ password }
            data-testid="admin_manage__input-password"
            onChange={ ({ target }) => handleChange(target) }
          />
        </label>
        <label htmlFor="type">
          <select
            name="type"
            data-testid="admin_manage__select-role"
            value={ role }
            onChange={ ({ target }) => handleChange(target) }
          >
            <option value="">Selecione</option>
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ isButtonDisabled }
          onClick={ (e) => handleClick(e) }
        >
          CADASTRAR
        </button>
      </form>
      { existingUser
        && (
          <span data-testid="admin_manage__element-invalid-register">
            { messageError }
          </span>
        )}
    </div>
  );
}

export default Form;
