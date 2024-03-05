import React, { useState, useRef } from "react";
import axios from "axios";

import { useNavigate } from 'react-router-dom'
import LoginImage from "../../assets/Burger-King-Logo.png";

import {
  Container,
  ContainerItems,
  H1,
  Image,
  ParagraphInput,
  Input,
  Button,
} from "./style";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  const InputName = useRef();
  const InputOrder = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      clienteName: InputName.current.value,
      order: InputOrder.current.value,
    });

    setUsers([...users, newOrder]);

    navigate('/usuarios')
  }

  return (
    <Container>
      <Image alt="Logo-img" src={LoginImage} />
      <ContainerItems>
        <H1>Faça Seu Pedido!</H1>

        <ParagraphInput>Pedido</ParagraphInput>
        <Input ref={InputOrder} placeholder="Oque deseja comprar hoje" />

        <ParagraphInput>Nome do Cliente</ParagraphInput>
        <Input ref={InputName} placeholder="Seu Nome" />

        <Button onClick={addNewOrder}>Concluir Pedido</Button>
    
      </ContainerItems>
    </Container>
  );
}

export default Users;
