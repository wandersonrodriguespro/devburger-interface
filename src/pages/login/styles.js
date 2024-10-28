import styled from 'styled-components';
import BackgroundLogin from '../../assets/bg-login.svg';
import Background from '../../assets/background.svg';

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
    width: 80%;
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
  font-family: 'Road Rage', sans-serif;
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: 100%;
  
  span {
    font-family: 'Road Rage', sans-serif;
    color: #9758a6;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContairner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
`;
