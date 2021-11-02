import React, { useState } from "react";
import styled from "styled-components";
import UserTable from "./tables/UserTable";

const Home = () => {
  //ADD CONTACT

  const usersdata = [
    // { id: 1, name: "juancarlo", user: "spiritu" },
    // { id: 2, name: "faca", user: "faca66" },
    // { id: 3, name: "robert", user: "robert44" },
  ];

  const [users, setUsers] = useState(usersdata);

//ADD USER
const add = (user) =>{
    user.id = users.length + 1;
    setUsers([...users, user])
}

  return (
    <HomeStyled>
      <div>
        <h1>Add Users</h1>
      </div>
      <div>
        <h1>View Users</h1>
        <UserTable users={users} />
      </div>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: grey;

  height: 100vh;
`;

export default Home;
