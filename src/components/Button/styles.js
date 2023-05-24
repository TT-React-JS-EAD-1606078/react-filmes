import styled from 'styled-components';
import { primary, secondary } from '../../theme';

export const StyledButton = styled.button`
  padding: .75rem 1rem;
  outline: none;
  border-radius: 8px;
  background-color: ${primary};
  border: 2px solid ${primary};
  font-size: 16px;
  color: ${secondary};
  font-weight: 600;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: filter .2s;

  :hover {
    filter: brightness(80%);
  }

  :active {
    filter: brightness(70%);
  }
`;
