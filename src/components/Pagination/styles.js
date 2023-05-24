import styled from 'styled-components';
import { backgroundColor, gray, primary, secondary } from '../../theme';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.25rem;
  border-radius: 8px;
  font-size: 16px;
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  font-weight: 600;
  outline: none;
  border: none;
  color: ${secondary};

  :disabled {
    cursor: not-allowed;
    filter: brightness(50%);
  }
`

export const Page = styled(Button)`
  background-color: ${({ active }) => active ? primary : gray};
  color: ${({ active }) => active ? secondary : backgroundColor};
  cursor: pointer;
`

export const Navigation = styled(Button)`
  background-color: ${primary};
  cursor: pointer;

`
