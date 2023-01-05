import React from 'react';
import styled from 'styled-components';
import FormContent from './form-content';
import { RegistrationPayload } from '../types/general-types';

interface RegistrationFormProps {
    loading: boolean;
    error: string | null;
    registerUser: (payload: RegistrationPayload) => void;
}

const RegistrationForm = (props: RegistrationFormProps) => {
    const { loading, error, registerUser } = props;
    return (
        <ExternalContainer>
            <FormContainer>
                <TitleContainer>Sign Up</TitleContainer>
                <FormContent loading={loading} registerUser={registerUser} />
            </FormContainer>
        </ExternalContainer>
    );
};

const TitleContainer = styled.div`
    font-size: 72px;
    text-align: center;
`;

const ExternalContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FormContainer = styled.div`
    width: 80%;
    background-color: #555555;
    margin: 0 auto;
    color: white;
    border-radius: 6px;
    box-shadow: 0 0 5px 3px #555555;
    padding-top: 20px;
    padding-bottom: 40px;
`;

export default RegistrationForm;
