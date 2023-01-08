import React from 'react';
import generalRoutesMap from '../../../routes/general-routes';
import styled from 'styled-components';
import colors from '../../../lib/styled-components/colors';
import { Link, useLocation } from 'react-router-dom';

interface MenuProps {}

const Menu = (props: MenuProps) => {
    const location = useLocation();
    return (
        <Wrapper>
            {Object.entries(generalRoutesMap).map(([key, value]) => {
                return (
                    <MenuItem $active={location.pathname.includes(key)}>
                        <Link to={key}>{value.menuTitle}</Link>
                    </MenuItem>
                );
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: 50px;
`;
const MenuItem = styled.div<{ $active?: boolean }>`
    width: 100%;
    background-color: ${({ $active }) => ($active ? colors.grayDark : 'transparent')};
    font-size: 30px;
    text-align: center;
    line-height: 40px;
    padding: 10px;

    a {
        text-decoration: none;
        color: ${colors.white};
    }
`;

export default Menu;
