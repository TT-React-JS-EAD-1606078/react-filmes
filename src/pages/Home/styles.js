import styled from 'styled-components';

export const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;


export const SearchContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  align-items: flex-end;
`

export const EmptyData = styled.span`
  font-size: 18px;
  font-style: italic;
`