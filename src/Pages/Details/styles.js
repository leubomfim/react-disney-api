import styled from 'styled-components';

export const Loading = styled.p`
  font-size: 32px;
  text-align: center;
`;

export const Back = styled.button`
  color: white;
  background-color: #1976D2;
  padding: 5px 20px;
  font-size: 20px;
  border-radius: 3px;
  cursor: pointer;
`;

export const CharacterPhoto = styled.img`
  border-radius: 3px;
  height: 400px;
  width: 500px;

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
`;

export const DetailsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const Name = styled.h3`
  font-size: 30px;
  margin-top: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content:  center;
  margin-top: 30px;
`;

export const P = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 20px;
  max-width: 700px;
  width: 100%;

  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

export const Span = styled.span`
  font-weight: 600;
`;
