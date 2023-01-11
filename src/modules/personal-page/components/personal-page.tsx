import React, { useState } from 'react';
import { User } from '../../../lib/types/general-types';
import styled from 'styled-components';
import colors from '../../../lib/styled-components/colors';
import { EditOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import EditUserModal from './edit-user-modal';
import StyledButton from '../../../lib/styled-components/styled-button';

interface PersonalPageProps {
    loading: boolean;
    userInformation: User | null;
    logoutUser: (onSuccess?: () => void) => void;
    editUserInformation: (userInformation: User) => void;
}

const PersonalPage = (props: PersonalPageProps) => {
    const { editUserInformation, userInformation, logoutUser, loading } = props;
    const navigate = useNavigate();
    const [isEditModalOpened, setEditModalOpened] = useState(false);

    const { nickname, userInfo, role } = userInformation || {};
    const { workPlace, name, lastName } = userInfo || {};

    const upperCaseRole = role
        ? role?.slice(0, 1)?.toUpperCase() + role?.slice(1)?.toLowerCase()
        : '';
    if (!userInformation) {
        return null;
    }

    return (
        <>
            <InformationContainer>
                <ImportantInformationContainer>
                    <NicknameContainer>{nickname}</NicknameContainer>
                    <NameContainer>
                        {name || lastName ? `${name || ''} ${lastName || ''}` : ''}
                    </NameContainer>
                    <OrganizationContainer>{workPlace}</OrganizationContainer>
                </ImportantInformationContainer>

                <ControlsContainer>
                    <RoleContainer>{upperCaseRole}</RoleContainer>
                    <PersonalPageButton
                        $borderColor={colors.violet}
                        type="link"
                        onClick={() => setEditModalOpened(true)}>
                        <EditOutlinedStyled />
                    </PersonalPageButton>
                    <PersonalPageButton
                        $borderColor={colors.green}
                        type="link"
                        onClick={() => {
                            logoutUser(() => {
                                navigate('/login');
                            });
                        }}>
                        <LogoutOutlinedStyled />
                    </PersonalPageButton>
                </ControlsContainer>
            </InformationContainer>
            <StyledDivider />
            <RoadmapCreationLinkContainer>
                <StyledButton
                    $isPrimary
                    $width="200px"
                    onClick={() => {
                        navigate('/roadmap-creation');
                    }}>
                    Create Roadmap
                </StyledButton>
            </RoadmapCreationLinkContainer>
            <EditUserModal
                editUserInformation={editUserInformation}
                userInformation={userInformation}
                isEditModalOpened={isEditModalOpened}
                setEditModalOpened={setEditModalOpened}
                loading={loading}
                error={null}
            />
        </>
    );
};

const RoadmapCreationLinkContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 20px;
    margin-right: 40px;

    & button {
        border-color: transparent;
    }
`;

const StyledDivider = styled(Divider)`
    background-color: ${colors.white};
    margin: 0;
    opacity: 30%;
    position: relative !important;
    z-index: -1;
`;

const PersonalPageButton = styled(Button)<{ $borderColor: string }>`
    margin-top: 0;
    opacity: 30%;
    padding: 4px 8px;
    border: 2px solid transparent;
    height: 42px !important;

    :hover {
        opacity: 100%;
        border: 2px solid ${({ $borderColor }) => $borderColor};
    }
`;

const EditOutlinedStyled = styled(EditOutlined)`
    &,
    svg {
        width: 30px;
        height: 30px;
        fill: ${colors.white};
    }
`;

const LogoutOutlinedStyled = styled(LogoutOutlined)`
    &,
    svg {
        width: 30px;
        height: 30px;
        fill: ${colors.white};
    }
`;

const Text = styled.div`
    color: ${colors.white};
`;

const InformationContainer = styled.div`
    padding: 40px 40px 22px 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ImportantInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
`;

const NicknameContainer = styled(Text)`
    font-size: 80px;
    line-height: 80px;
    font-weight: 100;
`;

const NameContainer = styled(Text)`
    font-size: 30px;
    line-height: 40px;
`;

const OrganizationContainer = styled(Text)`
    font-size: 20px;
    line-height: 36px;
`;

const RoleContainer = styled(Text)`
    font-size: 36px;
    line-height: 40px;
    margin-right: 40px;
`;

export default PersonalPage;
