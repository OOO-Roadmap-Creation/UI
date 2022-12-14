import RegistrationForm from '../modules/registration-form-module';
import LoginForm from '../modules/login-form-module';
import MainPage from '../modules/main-page';
import AuthWrapper from '../modules/auth-handler';
import React from 'react';
import MainLoader from '../lib/components/main-loader';
import styled from 'styled-components';
import RoadmapCreation from '../modules/roadmap-creation';

const mainRoutesMap = {
    '/registration': {
        component: () => <RegistrationForm />
    },
    '/': {
        component: () => (
            <AuthWrapper>
                <DummyPage>
                    <MainLoader />
                </DummyPage>
            </AuthWrapper>
        )
    },
    '/login': {
        component: () => <LoginForm />
    },
    '/general/*': {
        component: () => (
            <AuthWrapper>
                <MainPage />
            </AuthWrapper>
        )
    },
    '/roadmap-creation': {
        component: () => (
            <AuthWrapper>
                <RoadmapCreation />
            </AuthWrapper>
        )
    }
};

const DummyPage = styled.div`
    height: 100%;
`;

export default mainRoutesMap;
