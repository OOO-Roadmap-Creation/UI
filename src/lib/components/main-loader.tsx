import React from 'react';
import { Modal } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import colors from '../styled-components/colors';

const MainLoader = () => {
    return (
        <StyledModal open closable={false}>
            <ModalContainer>
                <ClockCircleOutlinedStyled />
            </ModalContainer>
        </StyledModal>
    );
};

const StyledModal = styled(Modal)`
    top: 30%;
    .ant-modal-content {
        background-color: transparent;
        box-shadow: none;
    }

    .ant-modal-footer > button {
        visibility: hidden;
    }
`;

const ClockCircleOutlinedStyled = styled(ClockCircleOutlined)`
    &,
    svg {
        height: 100px;
        width: 100px;
        fill: ${colors.white};
    }
`;
const ModalContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
export default MainLoader;
