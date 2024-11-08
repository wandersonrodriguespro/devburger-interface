import styled from "styled-components";
import BackgroundLogin from "../../assets/bg-login.svg";
import Background from "../../assets/background.svg";
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  img {
    width: 60%;
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: url('${Background}');
  background-size: contain;
  background-color: #1e1e1e;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    
    a {
      text-decoration: underline;
      color: #fff;
    }
  }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  color: #9758a6;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContairner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    font-family: Poppins;
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
  }
`;

 export const Link = styled(ReactLink)`
 text-decoration: none;
 color: #fff
 `
