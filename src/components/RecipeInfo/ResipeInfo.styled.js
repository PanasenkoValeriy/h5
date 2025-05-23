import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin-bottom: -6px;
  height: auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 22px;
`;

export const Thumb = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 30px;
  padding: 20px;
  max-width: 100%;
  box-sizing: border-box;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgb(7, 8, 9);
`;
