import styled from 'styled-components';

export const SearchBar = styled.input`
  display: flex;
  background: #ebebeb;
  width: 100%;
  margin: 20px 0;
  border-radius: 50px;
  border: none;
  padding: 15px 20px;
  outline: none;

  &::placeholder {
    color: #98b7c9;
  }
`;

export const MoviesList = styled.div`
  display: flex;
  flex-direction: column;
`;