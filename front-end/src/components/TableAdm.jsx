import React, { useContext, useEffect, useState } from 'react';
import { readLocal } from '../helpers/localStorage';
import fetchRemoveUser from '../api/fetchRemoveUser';
import fetchGetAllUser from '../api/fetchGetAllUser';
import stateGlobalContext from '../context/stateGlobalContext';

function Table() {
  const { setLoading } = useContext(stateGlobalContext);
  const [allUsers, setAllUsers] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const token = readLocal('user');
    const result = await fetchGetAllUser(token.token);
    setAllUsers(result.data);
  }, []);

  const removeUser = async (id) => {
    setLoading(true);
    const token = readLocal('user');
    const user = await fetchRemoveUser(token.token, id);
    setLoading(false);
    return user;
  };

  return (
    <>
      <h3>Lista de Usuários</h3>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
          { allUsers && allUsers.map((element, index) => {
            const tableNumber = `admin_manage__element-user-table-item-number-${index}`;
            const tableName = `admin_manage__element-user-table-name-${index}`;
            const tableEmail = `admin_manage__element-user-table-email-${index}`;
            const tableRole = `admin_manage__element-user-table-role-${index}`;
            const tableRemove = `admin_manage__element-user-table-remove-${index}`;
            return (
              <tr key={ element.id }>
                <td data-testid={ tableNumber }>{ index + 1 }</td>
                <td data-testid={ tableName }>{ element.name }</td>
                <td data-testid={ tableEmail }>{ element.email }</td>
                <td data-testid={ tableRole }>{ element.role }</td>
                <td data-testid={ tableRemove }>
                  <button
                    type="button"
                    onClick={ () => removeUser(element.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
