import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import axios from "axios";

import LoginImage from "../../assets/UserIMG.png";
import Trash from "../../assets/Trash.svg";

import {
  Container,
  ContainerItems,
  H1,
  Image,
  Button,
  User,
  ButtonTrash,
  NameUser,
  OrderUser,
} from "./style";

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/order");

      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  async function deleteOrder(UserId) {
    await axios.delete(`http://localhost:3001/order/${UserId}`)
    const newUsers = users.filter((user) => user.id !== UserId);

    setUsers(newUsers);
  }

  function goBackPage() {
    navigate('/')
  }

  return (
    <Container>
      <Image alt="Logo-img" src={LoginImage} />
      <ContainerItems>
        <H1>Pedidos em andamento!</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <OrderUser>{user.order}</OrderUser>{" "}
              <NameUser>{user.clienteName}</NameUser>
              <ButtonTrash onClick={() => deleteOrder(user.id)}>
                <img src={Trash} alt="Trash" />
              </ButtonTrash>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>

      </ContainerItems>
    </Container>
  );
}

export default App;
