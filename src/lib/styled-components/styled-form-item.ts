import styled from 'styled-components';
import { Form } from 'antd';
import colors from './colors';
const { Item } = Form;

const StyledItem = styled(Item)`
    & .ant-form-item-label {
        label {
            font-size: 26px !important;
            line-height: 40px !important;
            font-family: 'Montserrat' !important;
            font-weight: 200;
            color: ${colors.white};
        }
    }

    & .ant-col.ant-form-item-label {
        padding: 0 !important;
    }
`;

export default StyledItem;
