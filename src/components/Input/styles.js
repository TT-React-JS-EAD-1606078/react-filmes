import styled from 'styled-components';
import { backgroundColor, primary, secondary } from '../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  outline: none;
  padding: .5rem;
  border-radius: 8px;
  background-color: ${backgroundColor};
  border: 2px solid ${primary};
  font-size: 16px;
  color: ${secondary};
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: .25rem;
`;
