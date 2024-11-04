import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1980px;
  margin: auto;
  overflow-x: hidden;
  padding: 0 30px;
  padding-bottom: 100px;

  .react-multi-carousel-track {
    margin-bottom: 80px;
  }

  .carousel-item {
    padding: 0 42px;
  }

  .react-multi-carousel-list {
    overflow: visible;
    gap: 40px;
  }

  .react-multiple-carousel__arrow--left {
    bottom: 10px;
    left: calc(50% - 80px);
    background-color: #9758a6;
  }

  .react-multiple-carousel__arrow--right {
    bottom: 10px;
    right: calc(50% - 80px);
    background-color: #9758a6;
  }
`;

export const Title = styled.h2`
  position: relative;
  padding-bottom: 12px;
  margin: 40px 0 70px;
  color: #61a120;
  text-align: center;
  font-size: 32px;
  font-weight: 800;

  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 5px;
    background-color: #61a120;

    bottom: 0;
    left: calc(50% - 30px);
  }
`;
