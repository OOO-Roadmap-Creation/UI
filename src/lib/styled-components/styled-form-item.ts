import styled from 'styled-components';
import { Form } from 'antd';
import colors from "./colors";
const { Item } = Form;

const StyledItem = styled(Item)`
    & .ant-form-item-label {
        label {
            font-size: 22px !important;
            font-family: 'Sulphur Point' !important;
            color: ${colors.white};
        }
    }
`;

export default StyledItem;
