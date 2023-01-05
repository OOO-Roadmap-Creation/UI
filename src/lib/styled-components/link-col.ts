import styled from 'styled-components';
import { Col } from 'antd';
import colors from './colors';

const LinkCol = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;

    a {
        color: ${colors.white};
        font-size: 16px;

        :hover {
            text-decoration: underline;
        }
    }
`;

export default LinkCol;
