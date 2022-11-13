import styled from 'styled-components';

export const Loading = styled.p`
  font-size: 32px;
  text-align: center;
`;

export const CharactersArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 50px;
  justify-content: center;
`;

export const CharacterCard = styled.div`
  border: 1px solid #1976D2;
  padding: 20px;
`;

export const CharacterName = styled.h3`
  font-size: 25px;
  text-align: center;
`;

export const ImageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const CharacterImage = styled.img`
  width: 210px;
  border-radius: 3px;
  height: 300px;
`;

export const Details = styled.button`
  margin-top: 30px;
  width: 100%;
  background-color: #1976D2;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-radius: 3px;
  padding: 10px 0;
`;
