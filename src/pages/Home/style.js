import styled from "styled-components";
// import Background from "../../assets/imginvertida.jpg";

export const H1 = styled.h1`
  color: #fff;
  margin-top: -30px;
  margin-bottom: 40px;
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
  background: rgba(255, 255, 255, 0.21);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.8px);
  -webkit-backdrop-filter: blur(11.8px);
  border: 1px solid rgba(255, 255, 255, 0.4);

  border-radius: 61px 61px 0px 0px;
  padding: 0px 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 85vh;
  height: 100px;
`;

export const Image = styled.img`
  margin-top: 20px;
  margin-bottom: 30px;
  width: 250px;
`;

export const ParagraphInput = styled.p`
  color: #fff;
  letter-spacing: -0.408px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-left: 20px;
`;

export const Input = styled.input`
  background: rgba(15, 14, 15, 0.75);
  color: #fff;
  border: none;
  width: 342px;
  height: 58px;
  border-radius: 30px;
  margin-bottom: 60px;
  padding-left: 20px;
  outline: 0;
`;

export const Button = styled.button`
  width: 342px;
  height: 58px;
  background: #d93856;
  border-radius: 5px;
  border: none;

  text-align: center;
  line-height: 55px;
  text-decoration: none;
  font-weight: bold;
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


