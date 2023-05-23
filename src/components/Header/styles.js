import styled from 'styled-components';
import { primary } from '../../theme';

export const Container = styled.header`
  width: 100vw;
  background-color: ${primary};
  padding: 1rem 2rem;
  border-radius: 0 0 20px 20px;

  > h1 {
    font-size: 24px;
    font-weight: 600;
  }
`;

