import React from 'react';
import styled from 'styled-components';
import FormContent from './form-content';
import { LoginPayload } from '../types/general-types';

interface RegistrationFormProps {
    loading: boolean;
    error: string | null;
    loginUser: (payload: LoginPayload, onSuccess?: () => void) => void;
    clearError: () => void;
}

const LoginForm = (props: RegistrationFormProps) => {
    const { loading, error, loginUser, clearError } = props;
    return (
        <ExternalContainer>
            <FormContainer>
                <TitleContainer>Sign In</TitleContainer>
                <FormContent
                    loading={loading}
                    loginUser={loginUser}
                    clearError={clearError}
                    error={error}
                />
            </FormContainer>
        </ExternalContainer>
    );
};

const TitleContainer = styled.div`
    font-size: 72px;
    text-align: center;
    font-weight: 100;
`;

const ExternalContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FormContainer = styled.div`
    width: 60%;
    background-color: #555555;
    margin: 0 auto 40px auto;
    color: white;
    border-radius: 6px;
    box-shadow: 0 0 5px 3px #555555;
    padding-top: 20px;
    padding-bottom: 40px;
`;

export default LoginForm;
