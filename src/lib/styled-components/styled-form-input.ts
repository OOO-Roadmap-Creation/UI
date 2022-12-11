import styled from 'styled-components';
import { Input } from 'antd';
import colors from './colors';

const StyledInput = styled(Input)<{ $maxWidth?: string; height?: number }>`
    border-radius: 6px;
    max-width: ${({ $maxWidth }) => $maxWidth || ''};
    height: ${({ height }) => height || 40}px;

    &.ant-input:hover {
        border-color: ${colors.grayDark} !important;
    }

    &.ant-input:focus {
        border-color: ${colors.green} !important;
    }
  
    &.ant-input-status-error {
        border-color: ${colors.error} !important;
    }
`;

export default StyledInput;
