import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../../../lib/styled-components/colors';
import Menu from './menu';

const MENU_WIDTH = 300;
const ICON_WIDTH = 50;

interface MainPageProps {
    isMenuOpen: boolean;
    setMenuOpen: (payload: boolean) => void;
}

const MainPage = (props: MainPageProps) => {
    const { isMenuOpen, setMenuOpen } = props;
    return (
        <MainContainer>
            <MenuWrapper $visible={isMenuOpen}>
                <LeftPart $visible={isMenuOpen}>
                    <Menu />
                </LeftPart>
                <RightPart>
                    <IconContainer onClick={() => setMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <LeftOutlinedStyled /> : <RightOutlinedStyled />}
                    </IconContainer>
                    <IconDecorator />
                </RightPart>
            </MenuWrapper>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    height: 100%;
    position: relative;
`;

const MenuWrapper = styled.div<{ $visible: boolean }>`
    height: 100%;
    display: flex;
    flex-direction: row;
    width: ${MENU_WIDTH + ICON_WIDTH}px;
    position: absolute;
    left: 0;
    transition: 1s;

    ${({ $visible }) =>
        !$visible
            ? css`
                  transform: translateX(-${MENU_WIDTH}px);
                  transition: all 0.3s ease;
              `
            : css`
                  transform: translateX(0);
                  transition: all 0.3s ease;
              `}
`;

const LeftPart = styled.div<{ $visible: boolean }>`
    height: 100%;
    background-color: ${colors.grayLight};
    width: ${MENU_WIDTH}px;
`;

const RightPart = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${ICON_WIDTH}px;
    transform: translateX(-25px);
`;

const IconDecorator = styled.div`
    width: 90px;
    height: 50px;
    background: ${colors.grayLight};
    position: relative;

    transform: translateX(-${ICON_WIDTH / 2}px) rotate(30deg);
    z-index: 3;

    ::before {
        content: '';
        position: absolute;
        top: -24px;
        border-left: 45px solid transparent;
        border-right: 45px solid transparent;
        border-bottom: 25px solid ${colors.grayLight};
    }
    ::after {
        content: '';
        position: absolute;
        bottom: -24px;
        border-left: 45px solid transparent;
        border-right: 45px solid transparent;
        border-top: 25px solid ${colors.grayLight};
    }
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${ICON_WIDTH}px;
    z-index: 5;
    position: absolute;
    height: 100px;
    cursor: pointer;
`;

const RightOutlinedStyled = styled(RightOutlined)`
    & {
        transform: translateX(${ICON_WIDTH / 2}px);
    }
    &,
    svg {
        width: 25px;
        height: 25px;
        fill: ${colors.white};
    }
`;

const LeftOutlinedStyled = styled(LeftOutlined)`
    position: absolute;
    & {
        transform: translateX(${ICON_WIDTH / 2}px);
    }
    &,
    svg {
        width: 25px;
        height: 25px;
        fill: ${colors.white};
    }
`;

export default MainPage;
