import styled from "styled-components";

export const H1 = styled.h1`
  color: #fff;
  position: relative;
  margin-bottom: 10px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 40px;
`;

export const Container = styled.div`
  background: #1c1c1c;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`;

export const ContainerItems = styled.div`
  border-radius: 61px 61px 0px 0px;
  padding: 0px 36px;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 20px;
  width: 140px;
`;

export const Button = styled.button`
  width: 342px;
  height: 58px;
  margin-top: 30px;
  background: rgba(0, 0, 0, 0.57);
  border-radius: 5px;
  border: none;

  font-weight: bold;
  text-align: center;
  line-height: 55px;
  text-decoration: nonew;
  color: #fff;

  &:hover {
    transition: 0.5s;
    cursor: pointer;
    opacity: 0.4;
  }

  &:active {
    -webkit-box-shadow: 0px 0px 99px 0px rgba(217, 56, 86, 1);
    -moz-box-shadow: 0px 0px 99px 0px rgba(217, 56, 86, 1);
    box-shadow: 0px 0px 99px 0px rgba(217, 56, 86, 1);

    opacity: 1;
  }
`;

export const ButtonTrash = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 35px;
  margin-right: -115px;
  width: 120px;
`;

export const User = styled.li`
  background: rgba(222, 222, 222, 0.77);
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: start;
  text-align: start;
  border: none;
  width: 342px;
  height: 101px;
  border-radius: 14px;
  margin-top: 10px;
  padding-left: 20px;
  outline: 0;
  gap: 18px;

  background: rgba(255, 241, 241, 0.35);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 241, 241, 0.76);
`;

export const NameUser = styled.p`
  color: rgba(27, 25, 27, 1);
  width: 20px;
  height: 21px;
  font-weight: 700;
  font-size: 15px;
  line-height: 21px;
  margin-top: 70px;
  margin-left: -225px;
  white-space: nowrap;
`;

export const OrderUser = styled.p`
  color: rgba(45, 41, 44, 0.9);
  width: 20px;
  height: 42px;
  font-weight: 700;
  font-size: 13px;
  line-height: 21px;
  margin: 15px 10px 0 -70px;
  white-space: nowrap;
`;
