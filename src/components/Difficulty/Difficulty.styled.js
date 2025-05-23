import styled from 'styled-components';

export const Thumb = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
`;

export const Title = styled.h3`
  margin-left: 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Level = styled.p`
  background-color: rgb(250, 243, 223);
  border-radius: 30px;
  padding: 10px;
  font-size: 17px;
  transition: all 0.3s ease;

  &.active {
    background-color: rgb(255, 87, 87);
    color: white;
  }
`;
