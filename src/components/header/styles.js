import styled, { css } from 'styled-components';

export const Header = styled.header`
  padding: 20px 0;
  width: 100%;
  background-color: #1976D2;
  margin-bottom: 50px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const HeaderTitle = styled.h1`
  color: white;
`;

export const InputSearch = styled.input`
  width: 300px;
  padding: 8px 20px;
  border-radius: 3px;
  font-size: 19px;

  @media screen and (max-width: 600px) {
    ${({ disabled }) => css`
    ${disabled && 'display: none;'}
  `}
  }
`;
