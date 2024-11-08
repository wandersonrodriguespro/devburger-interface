import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1980px;
  margin: auto;
  padding: 0 30px;
  overflow-x: hidden;

  .react-multi-carousel-track {
    margin-bottom: 80px;
  }
  .carousel-item {
    padding: 0 42px;
    margin-top: 40px;
  }

  .react-multi-carousel-list {
    overflow-y: visible;
  }

  .react-multiple-carousel__arrow--left {
    bottom: 20px;
    left: calc(50% - 80px);
    background-color: #9758a6;
  }

  .react-multiple-carousel__arrow--right {
    bottom: 20px;
    right: calc(50% - 80px);
    background-color: #9758a6;
  }
`;

export const Title = styled.h2`
  position: relative;
  padding: 40px 0 12px;
  color: #9758a6;
  text-align: center;
  font-size: 32px;
  font-weight: 800;

  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 5px;
    background-color: #9758a6;

    bottom: 0;
    left: calc(50% - 30px);
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageUrl}');
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  /* max-width: 318px; */
  height: 231px;
  border-radius: 9px;

  p {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 22.5px;
    font-weight: 700;
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.5);
    margin-top: 60px;
    padding: 10px 30px;
  }
`;
