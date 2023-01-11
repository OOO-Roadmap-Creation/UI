import styled from 'styled-components';
import colors from './colors';

const Node = styled.div<{ $isSelected?: boolean, $closable?: boolean }>`
    background-color: ${colors.grayLight};
    padding: ${({ $closable }) => $closable ? '20px' : '10px'} 10px 10px 10px;
    border-radius: 6px;
    border: 1px solid ${({ $isSelected }) => ($isSelected ? colors.violet : colors.white)}};
    .text-container {
        font-size: 28px;
        color: ${colors.white};
    }
    .delete-btn {
        visibility: hidden;
    }
    
    &:hover {
      .delete-btn {
        visibility: visible;
      }
    }
`;

export default Node;
