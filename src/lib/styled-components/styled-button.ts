import styled from 'styled-components';
import { Button } from 'antd';
import colors from './colors';

const StyledButton = styled(Button)<{ $isPrimary?: boolean; $height?: number, $width?: string }>`
    border-radius: 6px;
    width: ${({ $width }) => $width || '100%'};
    height: ${({ $height }) => $height || 40}px;
    font-family: 'Sulphur Point' !important;
    font-size: 22px;
    color: ${({ $isPrimary }) => ($isPrimary ? colors.white : colors.grayDark)};
    background-color: ${({ $isPrimary }) => ($isPrimary ? colors.violet : colors.white)};

    &:hover {
        border-color: ${colors.green} !important;
        background-color: ${colors.green} !important;
        color: ${colors.white} !important;
    }
`;

export default StyledButton;
