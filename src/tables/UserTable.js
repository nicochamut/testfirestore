import React from "react";
import { CardUser } from "../components/styles";
import styled from "styled-components";

const UserTable = ({ users }) => {
  return (
    <User>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.user}</td>
                <td>
                  <button>edit</button>
                  <button>delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>no users</td>
            </tr>
          )}
        </tbody>
      </table>
    </User>
  );
};

const User = styled(CardUser)`
  display: flex;
  flex-direction: column;
  tr {
    display: grid;
    grid-template-columns: repeat(3, 8rem);
    margin: 1rem;
    justify-content: center;
    align-items: center;
    background: #62645c;
    padding: 0.5rem;
    border-radius: 2rem;
  }
`;

export default UserTable;
